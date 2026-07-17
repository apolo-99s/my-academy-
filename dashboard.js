// ============================================================
// DASHBOARD.JS — Student progress dashboard (isolated module)
// Reads SKILLS from data.js and progress from progress.js.
// ============================================================

function goDashboard() {
  renderDashboard();
}

function renderDashboard() {
  var t = T[lang];
  var dt = t.dash;
  var total = totalProgress();
  var radius = 36;
  var circumference = 2 * Math.PI * radius;
  var offset = circumference - (total.pct / 100) * circumference;

  document.getElementById('dash-title').textContent = dt.title;
  document.getElementById('dash-subtitle').textContent = dt.subtitle;
  document.getElementById('dash-footer').textContent = t.footer;

  var ringFg = document.getElementById('dash-ring-fg');
  ringFg.setAttribute('stroke-dasharray', circumference);
  ringFg.setAttribute('stroke-dashoffset', offset);
  document.getElementById('dash-ring-label').textContent = total.pct + '%';
  document.getElementById('dash-summary-title').textContent = dt.overallTitle;
  document.getElementById('dash-summary-sub').textContent = total.done + '/' + total.total + ' ' + dt.lessonsCompleted;

  var next = findNextIncomplete();
  var continueBtn = document.getElementById('dash-continue-btn');
  if (next) {
    continueBtn.textContent = dt.continueLearning;
    continueBtn.style.display = 'block';
    continueBtn.onclick = function() {
      skillId = next.skillId; levelIdx = next.levelIdx; lessonIdx = next.lessonIdx;
      renderLesson();
    };
  } else if (total.total > 0) {
    continueBtn.textContent = dt.allComplete;
    continueBtn.style.display = 'block';
    continueBtn.onclick = null;
  } else {
    continueBtn.style.display = 'none';
  }

  if (total.done === 0) {
    document.getElementById('dash-grid').innerHTML = '<div class="dash-empty">' + dt.empty + '</div>';
  } else {
    document.getElementById('dash-grid').innerHTML = '';
  }

  document.getElementById('dash-grid').innerHTML += SKILLS.map(function(s) {
    var sp = skillProgress(s);
    return '<div class="dash-card" onclick="skillId=\'' + s.id + '\';levelIdx=0;lessonIdx=null;renderSkill()"><div class="dash-card-top"><span class="dash-card-icon">' + s.icon + '</span><span class="dash-card-title">' + s.title[lang] + '</span></div><div class="dash-bar-track"><div class="dash-bar-fill" style="width:' + sp.pct + '%;background:' + s.color + '"></div></div><div class="dash-card-meta"><span>' + sp.done + '/' + sp.total + ' ' + dt.lessonsLabel + '</span><span style="color:' + s.accent + '">' + sp.pct + '%</span></div></div>';
  }).join('');

  showView('dashboard');
}
