// ============================================================
// PROGRESS.JS — Student lesson-completion tracking (isolated module)
// Source of truth is Supabase (table "progress"), keyed by access code.
// A local in-memory cache keeps render functions synchronous:
// call loadProgress() once (awaited) before relying on reads.
// ============================================================

var progressCache = {};
var progressLoaded = false;

function getMyCode() {
  return localStorage.getItem('myCode');
}

async function loadProgress() {
  progressCache = {};
  var code = getMyCode();
  if (!code) { progressLoaded = true; return; }
  var res = await sb.from('progress').select('skill_id, level_idx, lesson_idx').eq('code', code);
  if (!res.error && res.data) {
    res.data.forEach(function(row) {
      progressCache[row.skill_id + '|' + row.level_idx + '|' + row.lesson_idx] = true;
    });
  } else if (res.error) {
    console.error('loadProgress failed:', res.error.message);
  }
  progressLoaded = true;
}

function markLessonComplete(sId, lIdx, lsIdx) {
  var key = sId + '|' + lIdx + '|' + lsIdx;
  if (progressCache[key]) return; // already known complete, nothing to do
  progressCache[key] = true; // optimistic — update the UI immediately

  var code = getMyCode();
  if (!code) return;
  sb.from('progress').insert({ code: code, skill_id: sId, level_idx: lIdx, lesson_idx: lsIdx })
    .then(function(res) {
      // 23505 = unique_violation (already recorded from another tab/device) — not a real error
      if (res.error && res.error.code !== '23505') {
        console.error('markLessonComplete failed:', res.error.message);
      }
    });
}

function isLessonComplete(sId, lIdx, lsIdx) {
  return !!progressCache[sId + '|' + lIdx + '|' + lsIdx];
}

function skillProgress(skill) {
  var total = 0, done = 0;
  skill.levels.forEach(function(lv, li) {
    lv.lessons.forEach(function(les, lsi) {
      total++;
      if (progressCache[skill.id + '|' + li + '|' + lsi]) done++;
    });
  });
  return { done: done, total: total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function totalProgress() {
  var total = 0, done = 0;
  SKILLS.forEach(function(s) {
    var sp = skillProgress(s);
    total += sp.total;
    done += sp.done;
  });
  return { done: done, total: total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function findNextIncomplete() {
  for (var si = 0; si < SKILLS.length; si++) {
    var s = SKILLS[si];
    for (var li = 0; li < s.levels.length; li++) {
      var lv = s.levels[li];
      for (var lsi = 0; lsi < lv.lessons.length; lsi++) {
        if (!isLessonComplete(s.id, li, lsi)) {
          return { skillId: s.id, levelIdx: li, lessonIdx: lsi };
        }
      }
    }
  }
  return null;
}
