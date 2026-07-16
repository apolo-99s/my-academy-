var lang = localStorage.getItem('lang') || 'fr';
var hasAccess = localStorage.getItem('hasAccess') === 'true';
var skillId = null, levelIdx = 0, lessonIdx = null, openStep = null;

function showView(id) {
  ['landing','academy','skill-view','lesson-view'].forEach(function(v) {
    document.getElementById(v).style.display = 'none';
  });
  document.getElementById(id).style.display = 'flex';
  window.scrollTo(0, 0);
}

function goHome() {
  skillId = null; levelIdx = 0; lessonIdx = null;
  renderAcademy();
}

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    var txt = b.textContent.trim();
    b.classList.toggle('active', (l === 'fr' && txt === 'FR') || (l === 'ar' && txt === 'ع') || (l === 'en' && txt === 'EN'));
  });
  if (hasAccess) {
    if (lessonIdx !== null) renderLesson();
    else if (skillId) renderSkill();
    else renderAcademy();
  } else {
    renderLanding();
  }
}

function checkAccess() {
  var t = T[lang];
  var val = document.getElementById('access-input').value.trim().toUpperCase();
  var err = document.getElementById('access-error');
  var btn = document.getElementById('access-btn');
  if (!val) { err.textContent = t.errEmpty; err.style.display = 'block'; return; }
  if (!CODES.includes(val)) { err.textContent = t.errInvalid; err.style.display = 'block'; return; }
  var used = JSON.parse(localStorage.getItem('usedCodes') || '[]');
  if (used.includes(val)) { err.textContent = t.errUsed; err.style.display = 'block'; return; }
  btn.textContent = t.loading;
  btn.disabled = true;
  setTimeout(function() {
    used.push(val);
    localStorage.setItem('usedCodes', JSON.stringify(used));
    localStorage.setItem('hasAccess', 'true');
    hasAccess = true;
    renderAcademy();
  }, 900);
}

function clearErr() {
  document.getElementById('access-error').style.display = 'none';
  document.getElementById('access-input').classList.remove('err');
  var btn = document.getElementById('access-btn');
  btn.textContent = T[lang].access;
  btn.disabled = false;
}

function renderLanding() {
  var t = T[lang];
  document.getElementById('l-badge').textContent = t.badge;
  document.getElementById('l-title').textContent = t.title;
  document.getElementById('l-subtitle').textContent = t.subtitle;
  document.getElementById('l-f1').textContent = t.f1;
  document.getElementById('l-f2').textContent = t.f2;
  document.getElementById('l-f3').textContent = t.f3;
  document.getElementById('l-f4').textContent = t.f4;
  document.getElementById('l-includes-title').textContent = t.includesTitle;
  document.getElementById('l-includes-list').innerHTML = t.includes.map(function(i) {
    return '<div class="include-item"><span class="include-check">✓</span><span class="include-text">' + i + '</span></div>';
  }).join('');
  document.getElementById('l-already').textContent = t.already;
  document.getElementById('l-enter').textContent = t.enter;
  document.getElementById('access-input').placeholder = t.code;
  document.getElementById('access-btn').textContent = t.access;
  document.getElementById('l-not-bought').textContent = t.notBought;
  document.getElementById('l-whatsapp').textContent = t.whatsapp;
  document.getElementById('l-whatsapp').href = 'https://wa.me/213YOUR_NUMBER?text=' + encodeURIComponent('Je veux acheter la formation');
  document.getElementById('l-footer').textContent = t.footer;
  document.getElementById('l-stats').innerHTML = t.stats.map(function(s) {
    return '<div class="stat-item"><div class="stat-num">' + s.n + '</div><div class="stat-lbl">' + s.l + '</div></div>';
  }).join('');
  showView('landing');
}

function renderAcademy() {
  skillId = null; levelIdx = 0; lessonIdx = null;
  var t = T[lang];
  document.getElementById('a-badge').textContent = t.aBadge;
  document.getElementById('a-title').textContent = t.aTitle;
  document.getElementById('a-subtitle').textContent = t.aSubtitle;
  document.getElementById('a-features').innerHTML = t.aFeatures.map(function(f) {
    return '<span class="feature-tag">✓ ' + f + '</span>';
  }).join('');
  document.getElementById('a-rec').innerHTML = t.aRec;
  document.getElementById('a-footer').textContent = t.footer;
  document.getElementById('a-skill-cards').innerHTML = SKILLS.map(function(s) {
    return '<div class="skill-card" style="background:' + s.bg + ';border-color:' + s.color + '30;--bg-image:url(' + s.bgImage + ')" onclick="goSkill(\'' + s.id + '\')" onmouseenter="this.style.borderColor=\'' + s.color + '\'" onmouseleave="this.style.borderColor=\'' + s.color + '30\'"><div class="skill-icon">' + s.icon + '</div><div class="skill-sub" style="color:' + s.accent + '">' + s.subtitle[lang] + '</div><div class="skill-title">' + s.title[lang] + '</div><div class="skill-tagline">' + s.tagline[lang] + '</div><div class="skill-stats"><div class="skill-stat"><span class="stat-label">' + t.firstClient + '</span><span style="color:' + s.accent + ';font-weight:600">' + s.firstClient[lang] + '</span></div><div class="skill-stat"><span class="stat-label">' + t.earning + '</span><span style="color:' + s.accent + ';font-weight:600;font-size:11px">' + s.earning + '</span></div><div class="skill-stat"><span class="stat-label">' + t.startWith + '</span><span style="color:#9CA3AF;font-size:11px">' + s.startTool + '</span></div></div><button class="skill-cta" style="background:' + s.color + '22;border-color:' + s.color + '44;color:' + s.accent + '">' + t.startLearning + '</button></div>';
  }).join('');
  showView('academy');
}

function goSkill(id) { skillId = id; levelIdx = 0; lessonIdx = null; renderSkill(); }
function goLevel(i) { levelIdx = i; lessonIdx = null; renderSkill(); }

function getLevelStyle(name) {
  var map = { 'Débutant':'Beginner', 'مبتدئ':'Beginner', 'Beginner':'Beginner', 'Intermédiaire':'Intermediate', 'متوسط':'Intermediate', 'Intermediate':'Intermediate', 'Avancé':'Advanced', 'متقدم':'Advanced', 'Advanced':'Advanced', 'Maître':'Master', 'محترف':'Master', 'Master':'Master' };
  return LS[map[name] || name] || LS.Beginner;
}

function renderSkill() {
  var t = T[lang];
  var skill = SKILLS.find(function(s) { return s.id === skillId; });
  if (!skill) { console.error('Skill not found:', skillId); return; }
  var isAr = lang === 'ar';
  document.getElementById('skill-header').style.background = skill.bg;
  document.getElementById('skill-header').style.borderBottomColor = skill.color + '25';
  document.getElementById('sh-icon').textContent = skill.icon;
  document.getElementById('sh-title').textContent = skill.title[lang];
  document.getElementById('sh-earn').textContent = skill.earning;
  document.getElementById('sh-earn').style.color = skill.accent;
  document.getElementById('s-footer').textContent = t.footer;
  document.getElementById('level-tabs').innerHTML = skill.levels.map(function(lv, i) {
    var style = getLevelStyle(lv.name[lang]);
    var active = i === levelIdx;
    return '<button class="level-tab" onclick="goLevel(' + i + ')" style="background:' + (active ? style.bg : 'transparent') + ';border-color:' + (active ? style.border : '#1C1C28') + ';color:' + (active ? style.text : '#4B5563') + ';font-weight:' + (active ? 700 : 400) + '">' + lv.badge + ' ' + lv.name[lang] + '</button>';
  }).join('');
  var lv = skill.levels[levelIdx];
  var style = getLevelStyle(lv.name[lang]);
  document.getElementById('level-info').style.background = style.bg;
  document.getElementById('level-info').style.borderColor = style.border + '40';
  document.getElementById('level-info').innerHTML = '<div class="level-info-top"><span style="font-size:30px">' + lv.badge + '</span><div><div style="font-size:20px;font-weight:800;color:#fff">' + lv.name[lang] + '</div><div style="font-size:12px;color:#4B5563">' + lv.duration[lang] + '</div></div><div class="level-count" style="' + (isAr ? 'margin-right:auto' : 'margin-left:auto') + '"><div class="level-count-num" style="color:' + style.text + '">' + lv.lessons.length + '</div><div class="level-count-lbl">' + t.lessons + '</div></div></div><p style="color:#6B7280;font-size:13px;margin:0"><strong style="color:#9CA3AF">' + t.goal + ':</strong> ' + lv.goal[lang] + '</p>';
  document.getElementById('lesson-cards').innerHTML = lv.lessons.map(function(les, i) {
    return '<div class="lesson-card" onclick="goLesson(' + i + ')" onmouseenter="this.style.borderColor=\'' + skill.color + '66\'" onmouseleave="this.style.borderColor=\'#1C1C28\'"><span class="lesson-num" style="background:' + skill.color + '22;border:1px solid ' + skill.color + '44;color:' + skill.accent + '">' + (i + 1) + '</span><div class="lesson-info"><div class="lesson-title-text">' + les.title[lang] + '</div><div class="lesson-meta">' + les.steps[lang].length + ' étapes · exercice inclus</div></div><span style="color:#374151;font-size:20px;flex-shrink:0;transform:' + (isAr ? 'rotate(180deg)' : 'none') + '">→</span></div>';
  }).join('');
  var nav = '';
  if (levelIdx > 0) nav += '<button class="nav-prev" onclick="goLevel(' + (levelIdx - 1) + ')">' + (isAr ? '→' : '←') + ' ' + skill.levels[levelIdx - 1].name[lang] + '</button>';
  else nav += '<button class="nav-prev" onclick="renderAcademy()">' + (isAr ? '→' : '←') + ' ' + t.backSkills + '</button>';
  if (levelIdx < skill.levels.length - 1) nav += '<button class="nav-next" style="background:' + skill.color + '" onclick="goLevel(' + (levelIdx + 1) + ')">' + skill.levels[levelIdx + 1].name[lang] + ' ' + (isAr ? '←' : '→') + '</button>';
  document.getElementById('level-nav').innerHTML = nav;
  showView('skill-view');
}

function goLesson(i) { lessonIdx = i; openStep = null; renderLesson(); }
function prevLesson() { lessonIdx--; openStep = null; renderLesson(); }
function nextLesson() { lessonIdx++; openStep = null; renderLesson(); }
function nextLevel() { levelIdx++; lessonIdx = null; renderSkill(); }
function toggleStep(i) { openStep = openStep === i ? null : i; renderLesson(); }

function renderLesson() {
  var t = T[lang];
  var skill = SKILLS.find(function(s) { return s.id === skillId; });
  if (!skill) { console.error('Skill not found'); return; }
  var lv = skill.levels[levelIdx];
  if (!lv) { console.error('Level not found'); return; }
  var les = lv.lessons[lessonIdx];
  if (!les) { console.error('Lesson not found'); return; }
  var style = getLevelStyle(lv.name[lang]);
  var isAr = lang === 'ar';
  var isMobile = window.innerWidth < 600;
  var steps = les.steps[lang];
  var layout = les.layout || 'top';
  var showLeft = layout === 'left' && !isMobile;
  var showRight = layout === 'right' && !isMobile;
  document.getElementById('lesson-back-btn').textContent = (isAr ? '→' : '←') + ' ' + t.back.replace(/[←→]/g, '').trim();
  document.getElementById('lesson-back-btn').onclick = function() { renderSkill(); };
  document.getElementById('lesson-skill-icon').textContent = skill.icon;
  document.getElementById('lesson-skill-name').textContent = skill.title[lang];
  document.getElementById('lesson-level-name').textContent = lv.name[lang];
  document.getElementById('lesson-level-name').style.color = style.text;
  document.getElementById('lesson-counter').textContent = t.lesson + ' ' + (lessonIdx + 1) + ' ' + t.of + ' ' + lv.lessons.length;
  document.getElementById('lv-footer').textContent = t.footer;
  var imgTop = '', imgSide = '';
  if (les.image && (layout === 'top' || isMobile)) {
    imgTop = '<img class="lesson-img-top" src="' + les.image + '" alt="' + les.title[lang] + '" loading="lazy">';
  } else if (les.image && (showLeft || showRight)) {
    imgSide = '<div class="steps-side-img"><img src="' + les.image + '" alt="' + les.title[lang] + '" loading="lazy"></div>';
  }
  var stepsHTML = steps.map(function(step, i) {
    var isOpen = openStep === i;
    var preview = step.length > 80 && !isOpen ? step.substring(0, 80) + '…' : step;
    return '<div class="step-item" style="border-color:' + (isOpen ? skill.color + '60' : '#1C1C28') + '"><button class="step-btn" onclick="toggleStep(' + i + ')"><span class="step-num" style="' + (isOpen ? 'background:' + skill.color + ';color:#fff' : '') + '">' + (i + 1) + '</span><span class="step-text" style="color:' + (isOpen ? '#fff' : '#9CA3AF') + ';font-weight:' + (isOpen ? 600 : 400) + ';text-align:' + (isAr ? 'right' : 'left') + '">' + preview + '</span><span class="step-toggle">' + (isOpen ? '▲' : '▼') + '</span></button>' + (isOpen ? '<div class="step-expanded" style="display:block;padding:' + (isAr ? '0 52px 16px 16px' : '0 16px 16px 52px') + '">' + step + '</div>' : '') + '</div>';
  }).join('');
  var stepsWrap = '';
  if (showLeft) stepsWrap = '<div class="steps-with-img">' + imgSide + '<div class="steps-list">' + stepsHTML + '</div></div>';
  else if (showRight) stepsWrap = '<div class="steps-with-img" style="flex-direction:row-reverse">' + imgSide + '<div class="steps-list">' + stepsHTML + '</div></div>';
  else stepsWrap = '<div class="steps-list">' + stepsHTML + '</div>';
  var hasPrev = lessonIdx > 0;
  var hasNext = lessonIdx < lv.lessons.length - 1;
  var hasNextLv = levelIdx < skill.levels.length - 1;
  var prevBtn = hasPrev ? '<button class="lesson-nav-prev" onclick="prevLesson()">' + (isAr ? '→' : '←') + ' ' + t.prevLesson.replace(/[←→]/g, '').trim() + '</button>' : '<button class="lesson-nav-prev" onclick="renderSkill()">' + (isAr ? '→' : '←') + ' ' + t.back.replace(/[←→]/g, '').trim() + '</button>';
  var nextBtn = hasNext ? '<button class="lesson-nav-next" style="background:' + skill.color + '" onclick="nextLesson()">' + t.nextLesson.replace(/[←→]/g, '').trim() + ' ' + (isAr ? '←' : '→') + '</button>' : hasNextLv ? '<button class="lesson-nav-next" style="background:' + skill.color + '" onclick="nextLevel()">' + t.nextLevel + ': ' + skill.levels[levelIdx + 1].name[lang] + ' ' + (isAr ? '←' : '→') + '</button>' : '<div class="lesson-complete" style="color:' + skill.accent + ';border-color:' + skill.color + '50">' + t.complete + '</div>';
  document.getElementById('lesson-body').innerHTML = '<div style="margin-bottom:20px"><span style="background:' + style.bg + ';border:1px solid ' + style.border + ';color:' + style.text + ';border-radius:8px;padding:4px 12px;font-size:12px;font-weight:600">' + style.badge + ' ' + lv.name[lang] + '</span><span style="font-size:12px;color:#374151;margin-left:8px">' + t.lesson + ' ' + (lessonIdx + 1) + '</span></div><h1 style="font-size:clamp(20px,4vw,28px);font-weight:800;color:#fff;margin:0 0 24px;line-height:1.25">' + les.title[lang] + '</h1>' + imgTop + '<div style="margin-bottom:28px"><div class="steps-header"><div class="steps-bar" style="background:' + skill.color + '"></div><span class="steps-label">' + t.howTo + '</span></div>' + stepsWrap + '</div><div class="method-box" style="background:#0A0E18;border-color:' + skill.color + '30"><div class="box-header"><span class="box-emoji">🧠</span><span class="box-label" style="color:' + skill.accent + '">' + t.bestWay + '</span></div><p class="box-text" style="color:#9CA3AF">' + les.method[lang] + '</p></div><div class="method-box" style="background:#0E0A00;border-color:#92400E40"><div class="box-header"><span class="box-emoji">💪</span><span class="box-label" style="color:#FCD34D">' + t.exercise + '</span></div><p class="box-text" style="color:#D97706">' + les.exercise[lang] + '</p></div>' + (les.tip ? '<div class="tip-box"><p style="color:#6B7280;font-size:13px;line-height:1.65;margin:0">' + les.tip[lang] + '</p></div>' : '') + '<div class="lesson-nav">' + prevBtn + nextBtn + '</div>';
  showView('lesson-view');
}

(function() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    var txt = b.textContent.trim();
    b.classList.toggle('active', (lang === 'fr' && txt === 'FR') || (lang === 'ar' && txt === 'ع') || (lang === 'en' && txt === 'EN'));
  });
  if (hasAccess) renderAcademy();
  else renderLanding();
})();