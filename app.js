var SKILLS=[],skillsLoaded=!1,sb=null;
async function initSupabase(){sb=window.sb||supabase.createClient(SUPABASE_URL,SUPABASE_KEY)}
async function loadSkillsFromSupabase(){try{var{data,error}=await sb.from('skills_content').select('*').order('sort_order',{ascending:!0});if(error)throw error;data&&data.length>0?(SKILLS=data.map(r=>r.payload),skillsLoaded=!0,console.log('✅',SKILLS.length,'skills')):(console.log('⚠️ fallback'),SKILLS=window.SKILLS_FALLBACK||[])}catch(e){console.error('❌',e.message),SKILLS=window.SKILLS_FALLBACK||[]}}
function subscribeToSkills(){sb.channel('skills-changes').on('postgres_changes',{event:'*',schema:'public',table:'skills_content'},()=>{console.log('🔄 sync');loadSkillsFromSupabase().then(()=>{typeof renderAcademy==='function'&&renderAcademy()})}).subscribe()}
function hideLoader(){var l=document.getElementById('loading-screen');l&&(l.style.display='none')}
initSupabase().then(()=>{loadSkillsFromSupabase().then(()=>{hideLoader();subscribeToSkills()})});
var lang = localStorage.getItem('lang') || 'fr';
var hasAccess = localStorage.getItem('hasAccess') === 'true';
var skillId = null, levelIdx = 0, lessonIdx = null, openStep = null;
var currentView = 'academy';

// ============================================================
// LANGUAGE HELPERS — support both content shapes:
//  - OLD lessons: { fr:'...', ar:'...', en:'...' } for title/method/
//    exercise/tip, and steps as { fr:[...strings], ar:[...], en:[...] }
//  - NEW lessons (from enrich-skills v3/v4): title/method/exercise/
//    tip are still { fr, ar, en } (compatible as-is), but steps are
//    an ARRAY of { text:{fr,ar,en}, visual }, and fr/ar are often
//    still empty (content generated in English only for now).
// pickLang() falls back en -> fr -> ar so nothing renders blank.
// getStepsArray() normalizes either steps shape into a plain array
// of strings for the current language before the existing render
// logic runs, unchanged.
// ============================================================
function pickLang(field, l) {
  if (!field) return '';
  return field[l] || field.en || field.fr || field.ar || '';
}
function getStepsArray(les, l) {
  var raw = les.steps;
  if (Array.isArray(raw)) {
    return raw.map(function(s) { return pickLang(s && s.text, l); });
  }
  return (raw && raw[l]) || [];
}

function showView(id) {
  ['landing','academy','skill-view','lesson-view','dashboard'].forEach(function(v) {
    document.getElementById(v).style.display = 'none';
  });
  document.getElementById(id).style.display = 'flex';
  currentView = id;
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
    if (currentView === 'dashboard') renderDashboard();
    else if (lessonIdx !== null) renderLesson();
    else if (skillId) renderSkill();
    else renderAcademy();
  } else {
    renderLanding();
  }
}

async function checkAccess() {
  var t = T[lang];
  var val = document.getElementById('access-input').value.trim().toUpperCase();
  var err = document.getElementById('access-error');
  var btn = document.getElementById('access-btn');
  if (!val) { err.textContent = t.errEmpty; err.style.display = 'block'; return; }
  err.style.display = 'none';
  btn.textContent = t.loading;
  btn.disabled = true;

  var lookup = await sb.from('access_codes').select('code, used').eq('code', val).maybeSingle();
  if (lookup.error || !lookup.data) {
    err.textContent = t.errInvalid; err.style.display = 'block';
    btn.textContent = t.access; btn.disabled = false;
    return;
  }
  if (lookup.data.used) {
    err.textContent = t.errUsed; err.style.display = 'block';
    btn.textContent = t.access; btn.disabled = false;
    return;
  }

  var claim = await sb.from('access_codes')
    .update({ used: true, used_at: new Date().toISOString() })
    .eq('code', val)
    .eq('used', false)
    .select();
  if (claim.error || !claim.data || claim.data.length === 0) {
    // someone else claimed it between our check and this update
    err.textContent = t.errUsed; err.style.display = 'block';
    btn.textContent = t.access; btn.disabled = false;
    return;
  }

  localStorage.setItem('hasAccess', 'true');
  localStorage.setItem('myCode', val);
  hasAccess = true;
  await loadProgress();
  renderAcademy();
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
  document.getElementById('l-whatsapp').href = 'https://wa.me/213697105325text=' + encodeURIComponent('Je veux acheter la formation');
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
  document.getElementById('nav-dash-label').textContent = t.dash.navLabel;
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
  document.getElementById('nav-dash-label-2').textContent = t.dash.navLabel;
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
    var done = isLessonComplete(skill.id, levelIdx, i);
    return '<div class="lesson-card" onclick="goLesson(' + i + ')" onmouseenter="this.style.borderColor=\'' + skill.color + '66\'" onmouseleave="this.style.borderColor=\'#1C1C28\'"><span class="lesson-num' + (done ? ' done' : '') + '" style="' + (done ? '' : 'background:' + skill.color + '22;border:1px solid ' + skill.color + '44;color:' + skill.accent) + '">' + (done ? '✓' : (i + 1)) + '</span><div class="lesson-info"><div class="lesson-title-text">' + pickLang(les.title, lang) + '</div><div class="lesson-meta">' + getStepsArray(les, lang).length + ' étapes · exercice inclus</div></div><span style="color:#374151;font-size:20px;flex-shrink:0;transform:' + (isAr ? 'rotate(180deg)' : 'none') + '">→</span></div>';
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
  markLessonComplete(skill.id, levelIdx, lessonIdx);
  var style = getLevelStyle(lv.name[lang]);
  var isAr = lang === 'ar';
  var isMobile = window.innerWidth < 600;
  var steps = getStepsArray(les, lang);
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
  var lesTitle = pickLang(les.title, lang);
  if (les.image && (layout === 'top' || isMobile)) {
    imgTop = '<img class="lesson-img-top" src="' + les.image + '" alt="' + lesTitle + '" loading="lazy">';
  } else if (les.image && (showLeft || showRight)) {
    imgSide = '<div class="steps-side-img"><img src="' + les.image + '" alt="' + lesTitle + '" loading="lazy"></div>';
  }
  var stepsHTML = steps.map(function(step, i) {
    var isOpen = openStep === i;
    var preview = step.length > 80 ? step.substring(0, 80) + '…' : step;
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
  document.getElementById('lesson-body').innerHTML = '<div style="margin-bottom:20px"><span style="background:' + style.bg + ';border:1px solid ' + style.border + ';color:' + style.text + ';border-radius:8px;padding:4px 12px;font-size:12px;font-weight:600">' + style.badge + ' ' + lv.name[lang] + '</span><span style="font-size:12px;color:#374151;margin-left:8px">' + t.lesson + ' ' + (lessonIdx + 1) + '</span></div><h1 style="font-size:clamp(20px,4vw,28px);font-weight:800;color:#fff;margin:0 0 24px;line-height:1.25">' + lesTitle + '</h1>' + imgTop + '<div style="margin-bottom:28px"><div class="steps-header"><div class="steps-bar" style="background:' + skill.color + '"></div><span class="steps-label">' + t.howTo + '</span></div>' + stepsWrap + '</div><div class="method-box" style="background:#0A0E18;border-color:' + skill.color + '30"><div class="box-header"><span class="box-emoji">🧠</span><span class="box-label" style="color:' + skill.accent + '">' + t.bestWay + '</span></div><p class="box-text" style="color:#9CA3AF">' + pickLang(les.method, lang) + '</p></div><div class="method-box" style="background:#0E0A00;border-color:#92400E40"><div class="box-header"><span class="box-emoji">💪</span><span class="box-label" style="color:#FCD34D">' + t.exercise + '</span></div><p class="box-text" style="color:#D97706">' + pickLang(les.exercise, lang) + '</p></div>' + (les.tip ? '<div class="tip-box"><p style="color:#6B7280;font-size:13px;line-height:1.65;margin:0">' + pickLang(les.tip, lang) + '</p></div>' : '') + '<div class="lesson-nav">' + prevBtn + nextBtn + '</div>';
  showView('lesson-view');
}

// ============================================================
// LIVE SKILLS — loads the latest content saved from the admin
// "Skills" tab (Supabase table skills_content) so changes appear
// on the site immediately, without editing data.js.
// If Supabase is unreachable or the table is empty, the site
// silently falls back to the SKILLS array already defined in
// data.js, so it never breaks.
// ============================================================
async function loadLiveSkills() {
  try {
    if (typeof sb === 'undefined') return;
    var res = await sb.from('skills_content').select('*').order('sort_order', { ascending: true });
    if (!res.error && res.data && res.data.length) {
      SKILLS = res.data.map(function(r) { return r.payload; });
      console.log('[Skills] Chargées depuis Supabase (' + SKILLS.length + ')');
    } else {
      console.log('[Skills] Supabase vide/erreur — fallback sur data.js');
    }
  } catch (e) {
    console.error('[Skills] Échec du chargement live, fallback sur data.js', e);
  }
}

(function() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    var txt = b.textContent.trim();
    b.classList.toggle('active', (lang === 'fr' && txt === 'FR') || (lang === 'ar' && txt === 'ع') || (lang === 'en' && txt === 'EN'));
  });
  loadLiveSkills().then(function() {
    if (hasAccess) {
      loadProgress().then(renderAcademy);
    } else {
      renderLanding();
    }
  });
})();
// ============================================================
// 3D ANIMATION BACKGROUND
// S'exécute sur toutes les pages du site
// ============================================================
(function() {
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init3DBackground);
    } else {
        init3DBackground();
    }

    function init3DBackground() {
        // Vérifier que le canvas existe
        var canvas = document.getElementById('bg-3d');
        if (!canvas) {
            console.warn('Canvas #bg-3d non trouvé, création automatique');
            canvas = document.createElement('canvas');
            canvas.id = 'bg-3d';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;';
            document.body.prepend(canvas);
        }

        // Initialisation Three.js
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            alpha: true,
            antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ============ PARTICULES (étoiles) ============
        var particlesGeometry = new THREE.BufferGeometry();
        var particlesCount = 400;
        var posArray = new Float32Array(particlesCount * 3);
        var colorArray = new Float32Array(particlesCount * 3);

        for (var i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 12;
            posArray[i + 1] = (Math.random() - 0.5) * 8;
            posArray[i + 2] = (Math.random() - 0.5) * 6;
            
            colorArray[i] = Math.random() * 0.4 + 0.3;
            colorArray[i + 1] = Math.random() * 0.2 + 0.1;
            colorArray[i + 2] = Math.random() * 0.7 + 0.3;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

        var particlesMaterial = new THREE.PointsMaterial({
            size: 0.035,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.6
        });

        var particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // ============ TORE 1 (violet) ============
        var torus1Geo = new THREE.TorusGeometry(2, 0.35, 16, 100);
        var torus1Mat = new THREE.MeshStandardMaterial({
            color: '#6C63FF',
            wireframe: true,
            transparent: true,
            opacity: 0.1,
            emissive: '#6C63FF',
            emissiveIntensity: 0.15
        });
        var torus1 = new THREE.Mesh(torus1Geo, torus1Mat);
        torus1.position.set(-3, 1.5, -4);
        scene.add(torus1);

        // ============ TORE 2 (rose) ============
        var torus2Geo = new THREE.TorusGeometry(1.3, 0.2, 16, 80);
        var torus2Mat = new THREE.MeshStandardMaterial({
            color: '#FF6584',
            wireframe: true,
            transparent: true,
            opacity: 0.1,
            emissive: '#FF6584',
            emissiveIntensity: 0.15
        });
        var torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
        torus2.position.set(3, -1, -3);
        scene.add(torus2);

        // ============ SPHÈRE (verte) ============
        var sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
        var sphereMat = new THREE.MeshStandardMaterial({
            color: '#43E97B',
            wireframe: true,
            transparent: true,
            opacity: 0.12,
            emissive: '#43E97B',
            emissiveIntensity: 0.15
        });
        var sphere = new THREE.Mesh(sphereGeo, sphereMat);
        sphere.position.set(-1.5, -2, -2);
        scene.add(sphere);

        // ============ CUBE (orange) ============
        var cubeGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
        var cubeMat = new THREE.MeshStandardMaterial({
            color: '#FFA502',
            wireframe: true,
            transparent: true,
            opacity: 0.1,
            emissive: '#FFA502',
            emissiveIntensity: 0.12
        });
        var cube = new THREE.Mesh(cubeGeo, cubeMat);
        cube.position.set(2.5, 1.8, -3);
        scene.add(cube);

        // ============ ANNEAU ============
        var ringGeo = new THREE.TorusGeometry(1, 0.12, 16, 60);
        var ringMat = new THREE.MeshStandardMaterial({
            color: '#8B85FF',
            wireframe: false,
            transparent: true,
            opacity: 0.06,
            emissive: '#8B85FF',
            emissiveIntensity: 0.2,
            metalness: 0.8,
            roughness: 0.2
        });
        var ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(0, 0.5, -1.5);
        scene.add(ring);

        // ============ LUMIÈRES ============
        var light1 = new THREE.PointLight('#6C63FF', 0.5, 50);
        light1.position.set(5, 5, 5);
        scene.add(light1);

        var light2 = new THREE.PointLight('#FF6584', 0.3, 30);
        light2.position.set(-5, -2, 3);
        scene.add(light2);

        var ambientLight = new THREE.AmbientLight('#ffffff', 0.25);
        scene.add(ambientLight);

        camera.position.z = 5;

        // ============ ANIMATION ============
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotation particules
            particlesMesh.rotation.y += 0.0002;
            particlesMesh.rotation.x += 0.0001;
            
            // Rotation tores
            torus1.rotation.x += 0.003;
            torus1.rotation.y += 0.005;
            
            torus2.rotation.x += 0.004;
            torus2.rotation.z += 0.003;
            
            // Rotation sphère
            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.003;
            
            // Rotation cube
            cube.rotation.x += 0.003;
            cube.rotation.y += 0.005;
            
            // Rotation anneau
            ring.rotation.z += 0.002;
            ring.rotation.x += 0.003;
            
            renderer.render(scene, camera);
        }

        animate();

        // ============ RESIZE ============
        window.addEventListener('resize', function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        console.log('✅ 3D Background initialisé');
    }
})();