// ============================================================
// ADMIN-DASHBOARD.JS — AI Control Center (extension admin.html)
// Nouveaux onglets: Overview, Generators, Workflow, Research, Analytics
// Compatible avec tables existantes: skills_content, articles, categories,
// pending_lesson_suggestions, access_codes, tools_library, etc.
// ============================================================

// ============================================================
// CONFIG & STATE
// ============================================================
var OVERVIEW_TAB_INIT = false;
var GENERATORS_TAB_INIT = false;
var WORKFLOW_TAB_INIT = false;
var RESEARCH_TAB_INIT = false;
var ANALYTICS_TAB_INIT = false;

// ============================================================
// EXTEND: switchAdminTab — ajoute les nouveaux onglets
// ============================================================
var _originalSwitchAdminTab = switchAdminTab;
switchAdminTab = function(tab) {
  var allTabs = ['codes', 'skills', 'news', 'overview', 'generators', 'workflow', 'research', 'analytics'];
  allTabs.forEach(function(t) {
    var panel = document.getElementById('tab-' + t);
    var btn = document.getElementById('tab-btn-' + t);
    if (panel) panel.style.display = (t === tab) ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', t === tab);
  });

  if (tab === 'skills' && skillsRows.length === 0) loadSkills();
  if (tab === 'news' && !newsTabInitialized) { newsTabInitialized = true; initNewsTab(); }
  if (tab === 'overview' && !OVERVIEW_TAB_INIT) { OVERVIEW_TAB_INIT = true; initOverviewTab(); }
  if (tab === 'generators' && !GENERATORS_TAB_INIT) { GENERATORS_TAB_INIT = true; initGeneratorsTab(); }
  if (tab === 'workflow' && !WORKFLOW_TAB_INIT) { WORKFLOW_TAB_INIT = true; initWorkflowTab(); }
  if (tab === 'research' && !RESEARCH_TAB_INIT) { RESEARCH_TAB_INIT = true; initResearchTab(); }
  if (tab === 'analytics' && !ANALYTICS_TAB_INIT) { ANALYTICS_TAB_INIT = true; initAnalyticsTab(); }
};

// ============================================================
// TAB: OVERVIEW — Vue d'ensemble du système
// ============================================================
function initOverviewTab() {
  renderOverviewStats();
  renderOverviewPipeline();
  renderOverviewActivity();
}

async function renderOverviewStats() {
  var container = document.getElementById('overview-stats');
  if (!container) return;

  // Fetch all counts in parallel
  var [skillsRes, articlesRes, codesRes, pendingRes, toolsRes] = await Promise.all([
    sb.from('skills_content').select('id', { count: 'exact', head: true }),
    sb.from('articles').select('id', { count: 'exact', head: true }),
    sb.from('access_codes').select('id', { count: 'exact', head: true }),
    sb.from('content_drafts').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
    sb.from('tools_library').select('id', { count: 'exact', head: true })
  ]);

  var stats = {
    skills: skillsRes.count || 0,
    articles: articlesRes.count || 0,
    codes: codesRes.count || 0,
    pending: pendingRes.count || 0,
    tools: toolsRes.count || 0
  };

  container.innerHTML = `
    <div class="admin-stats">
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#6366f1">${stats.skills}</div>
        <div class="admin-stat-lbl">Skills</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#8b5cf6">${stats.articles}</div>
        <div class="admin-stat-lbl">Articles News</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#22c55e">${stats.codes}</div>
        <div class="admin-stat-lbl">Codes d'accès</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#f59e0b">${stats.pending}</div>
        <div class="admin-stat-lbl">Brouillons en attente</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#06b6d4">${stats.tools}</div>
        <div class="admin-stat-lbl">Outils référencés</div>
      </div>
    </div>
  `;
}

async function renderOverviewPipeline() {
  var container = document.getElementById('overview-pipeline');
  if (!container) return;

  // Check Edge Functions status by calling them with a health check
  var functions = [
    { name: 'process-news', label: 'News RSS', icon: '📰' },
    { name: 'generate-skill', label: 'Skill Gen', icon: '🧩' },
    { name: 'enrich-skills', label: 'Enrich Skills', icon: '✨' },
    { name: 'generate-tips', label: 'Tips Gen', icon: '💡' }
  ];

  var statuses = await Promise.all(functions.map(async function(fn) {
    try {
      var res = await fetch(SUPABASE_URL + '/functions/v1/' + fn.name, {
        method: 'HEAD',
        headers: { 'Authorization': 'Bearer ' + SUPABASE_KEY, 'apikey': SUPABASE_KEY }
      });
      return { ...fn, status: res.ok ? 'online' : 'offline' };
    } catch(e) {
      return { ...fn, status: 'unknown' };
    }
  }));

  container.innerHTML = `
    <div class="admin-table-wrap glass" style="margin-bottom:20px">
      <div class="admin-table-title">⚡ Pipeline IA — État des services</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
        ${statuses.map(function(s) {
          var color = s.status === 'online' ? '#22c55e' : (s.status === 'offline' ? '#ef4444' : '#f59e0b');
          var dot = s.status === 'online' ? '●' : (s.status === 'offline' ? '○' : '◐');
          return `<div style="text-align:center;padding:16px;background:#0f0f1a;border-radius:12px">
            <div style="font-size:28px;margin-bottom:8px">${s.icon}</div>
            <div style="font-size:13px;color:#e2e8f0;font-weight:600">${s.label}</div>
            <div style="font-size:12px;color:${color};margin-top:4px">${dot} ${s.status}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

async function renderOverviewActivity() {
  var container = document.getElementById('overview-activity');
  if (!container) return;

  // Get recent activity from multiple sources
  var [draftsRes, articlesRes, logsRes] = await Promise.all([
    sb.from('content_drafts').select('type,title,status,created_at').order('created_at', { ascending: false }).limit(5),
    sb.from('articles').select('title_fr,status,published_at').order('published_at', { ascending: false }).limit(5),
    sb.from('research_logs').select('action,details,created_at').order('created_at', { ascending: false }).limit(5)
  ]);

  var activities = [];

  (draftsRes.data || []).forEach(function(d) {
    var title = (d.title && d.title.fr) || 'Sans titre';
    activities.push({
      time: d.created_at,
      text: `IA a généré un brouillon: "${skEscape(title)}" — ${d.type}`,
      color: '#6366f1',
      icon: '🤖'
    });
  });

  (articlesRes.data || []).forEach(function(a) {
    activities.push({
      time: a.published_at,
      text: `Article publié: "${skEscape(a.title_fr || '')}"`,
      color: '#22c55e',
      icon: '📰'
    });
  });

  (logsRes.data || []).forEach(function(l) {
    activities.push({
      time: l.created_at,
      text: `Research: ${l.action}`,
      color: '#f59e0b',
      icon: '🔬'
    });
  });

  // Sort by time
  activities.sort(function(a, b) { return new Date(b.time) - new Date(a.time); });
  activities = activities.slice(0, 8);

  container.innerHTML = `
    <div class="admin-table-wrap glass">
      <div class="admin-table-title">🕐 Activité récente</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${activities.map(function(a) {
          var timeStr = a.time ? new Date(a.time).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) : '';
          return `<div style="padding:10px 12px;background:#0f0f1a;border-radius:8px;border-left:3px solid ${a.color};display:flex;align-items:center;gap:10px">
            <span style="font-size:16px">${a.icon}</span>
            <div style="flex:1">
              <span style="color:#64748b;font-size:11px;font-family:monospace">[${timeStr}]</span>
              <span style="color:#e2e8f0;font-size:13px"> ${a.text}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// TAB: GENERATORS — Interface pour tous les générateurs IA
// ============================================================
function initGeneratorsTab() {
  renderGeneratorsGrid();
}

function renderGeneratorsGrid() {
  var container = document.getElementById('generators-grid');
  if (!container) return;

  var generators = [
    { id: 'skill', icon: '🧩', title: 'Skill Generator', desc: 'Génère une compétence complète avec roadmap, niveaux, objectifs', status: 'active', fn: 'generate-skill' },
    { id: 'lesson', icon: '📖', title: 'Lesson Generator', desc: 'Crée des leçons avec explications, exemples, exercices', status: 'active', fn: 'generate-lesson' },
    { id: 'project', icon: '🚀', title: 'Project Generator', desc: 'Génère des projets réels avec étapes et critères', status: 'active', fn: 'generate-project' },
    { id: 'quiz', icon: '❓', title: 'Quiz Generator', desc: 'Crée des quiz avec questions variées et explications', status: 'active', fn: 'generate-quiz' },
    { id: 'code', icon: '💻', title: 'Code Generator', desc: 'Génère des snippets commentés et démonstrations', status: 'active', fn: 'generate-code' },
    { id: 'news', icon: '📰', title: 'News Generator', desc: 'Analyse RSS, résume, traduit, taggue les articles', status: 'active', fn: 'process-news' },
    { id: 'tips', icon: '💡', title: 'Tips Generator', desc: 'Astuces quotidiennes personnalisées par compétence', status: 'active', fn: 'generate-tips' },
    { id: 'curriculum', icon: '📋', title: 'Curriculum Generator', desc: 'Construit un parcours d\'apprentissage complet', status: 'active', fn: 'generate-curriculum' },
    { id: 'video', icon: '🎬', title: 'Video Generator', desc: 'Scripts, voix, animations, sous-titres', status: 'future', fn: null }
  ];

  container.innerHTML = generators.map(function(g) {
    var opacity = g.status === 'future' ? 'opacity:.5' : '';
    var badge = g.status === 'future' ? '<span class="badge" style="background:#47556920;color:#475569;border:1px solid #47556940">🔒 Future</span>' : '<span class="badge badge-draft">+ Générer</span>';
    var onclick = g.status === 'future' ? '' : `onclick="openGeneratorModal('${g.id}', '${g.fn}')"`;
    return `
      <div class="generator-card" style="${opacity};cursor:${g.status === 'future' ? 'not-allowed' : 'pointer'}" ${onclick}>
        <div style="font-size:32px;margin-bottom:12px">${g.icon}</div>
        <h3 style="margin:0 0 8px 0;font-size:16px;color:#fff">${g.title}</h3>
        <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5">${g.desc}</p>
        <div style="margin-top:12px">${badge}</div>
      </div>
    `;
  }).join('');
}

var currentGeneratorType = '';
var currentGeneratorFn = '';

function openGeneratorModal(type, fnName) {
  currentGeneratorType = type;
  currentGeneratorFn = fnName;
  var titles = {
    skill: '🧩 Skill Generator',
    lesson: '📖 Lesson Generator',
    project: '🚀 Project Generator',
    quiz: '❓ Quiz Generator',
    code: '💻 Code Generator',
    news: '📰 News Generator',
    tips: '💡 Tips Generator',
    curriculum: '📋 Curriculum Generator'
  };
  document.getElementById('gen-modal-title').textContent = titles[type] || 'Générateur IA';
  document.getElementById('gen-modal-topic').value = '';
  document.getElementById('gen-modal-skill').innerHTML = '<option value="">Aucune skill spécifique</option>';
  document.getElementById('gen-modal-level').value = 'all';
  document.getElementById('gen-modal-instructions').value = '';
  document.getElementById('gen-modal-progress').style.display = 'none';
  document.getElementById('gen-modal-result').style.display = 'none';
  document.getElementById('generator-modal').style.display = 'flex';

  // Load skills for dropdown
  loadSkillsForGenerator();
}

function closeGeneratorModal() {
  document.getElementById('generator-modal').style.display = 'none';
}

async function loadSkillsForGenerator() {
  var select = document.getElementById('gen-modal-skill');
  var res = await sb.from('skills_content').select('skill_id, payload');
  if (res.error || !res.data) return;
  res.data.forEach(function(row) {
    var title = (row.payload && row.payload.title && row.payload.title.fr) || row.skill_id;
    var opt = document.createElement('option');
    opt.value = row.skill_id;
    opt.textContent = title;
    select.appendChild(opt);
  });
}

async function runGenerator() {
  var topic = document.getElementById('gen-modal-topic').value.trim();
  var skillId = document.getElementById('gen-modal-skill').value;
  var level = document.getElementById('gen-modal-level').value;
  var instructions = document.getElementById('gen-modal-instructions').value.trim();

  if (!topic && !skillId) {
    alert('Entre un sujet ou sélectionne une skill.');
    return;
  }

  var progressDiv = document.getElementById('gen-modal-progress');
  var bar = document.getElementById('gen-modal-bar');
  var percent = document.getElementById('gen-modal-percent');
  var log = document.getElementById('gen-modal-log');
  var resultDiv = document.getElementById('gen-modal-result');

  progressDiv.style.display = 'block';
  resultDiv.style.display = 'none';

  var steps = [
    { p: 10, t: 'Analyse du contexte...' },
    { p: 25, t: 'Recherche des sources...' },
    { p: 45, t: 'Génération du contenu...' },
    { p: 70, t: 'Structuration et formatage...' },
    { p: 90, t: 'Vérification qualité...' },
    { p: 100, t: 'Brouillon créé!' }
  ];

  var i = 0;
  var interval = setInterval(function() {
    if (i >= steps.length) {
      clearInterval(interval);
      return;
    }
    bar.style.width = steps[i].p + '%';
    percent.textContent = steps[i].p + '%';
    log.textContent = steps[i].t;
    i++;
  }, 500);

  try {
    var payload = {
      topic: topic,
      skill_id: skillId || null,
      level: level,
      instructions: instructions,
      language: lang || 'fr'
    };

    var res = await fetch(SUPABASE_URL + '/functions/v1/' + currentGeneratorFn, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    var data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Erreur ' + res.status);

    clearInterval(interval);
    bar.style.width = '100%';
    percent.textContent = '100%';
    log.textContent = 'Brouillon créé avec succès!';

    // Show result preview
    resultDiv.style.display = 'block';
    document.getElementById('gen-modal-preview').textContent = JSON.stringify(data, null, 2);

    // Save to content_drafts
    await saveDraftToSupabase(data, topic, skillId);

    setTimeout(function() {
      closeGeneratorModal();
      switchAdminTab('workflow');
    }, 1500);

  } catch (err) {
    clearInterval(interval);
    log.textContent = 'Erreur: ' + err.message;
    log.style.color = '#ef4444';
  }
}

async function saveDraftToSupabase(data, topic, skillId) {
  var title = { fr: topic || 'Sans titre', ar: '', en: '' };
  if (data.title && typeof data.title === 'object') {
    title = { ...title, ...data.title };
  } else if (data.title) {
    title.fr = data.title;
  }

  var draft = {
    type: currentGeneratorType,
    skill_id: skillId || null,
    title: title,
    content: data,
    status: 'pending',
    created_by_ai: true
  };

  await sb.from('content_drafts').insert(draft);
}

// ============================================================
// TAB: WORKFLOW — Validation des brouillons IA
// ============================================================
function initWorkflowTab() {
  loadWorkflowDrafts();
}

async function loadWorkflowDrafts(status) {
  status = status || 'all';
  var container = document.getElementById('workflow-list');
  var statusLabel = document.getElementById('workflow-status-label');
  if (!container) return;

  var query = sb.from('content_drafts').select('*').order('created_at', { ascending: false }).limit(50);
  if (status !== 'all') query = query.eq('status', status);

  var res = await query;
  if (res.error) {
    container.innerHTML = '<p style="color:#ef4444">Erreur: ' + skEscape(res.error.message) + '</p>';
    return;
  }

  var drafts = res.data || [];
  var counts = { pending: 0, approved: 0, rejected: 0, needs_edit: 0 };
  drafts.forEach(function(d) { if (counts[d.status] !== undefined) counts[d.status]++; });

  if (statusLabel) {
    statusLabel.innerHTML = `
      <span class="badge badge-pending">⏳ ${counts.pending} en attente</span>
      <span class="badge badge-approved">✅ ${counts.approved} approuvés</span>
      <span class="badge badge-rejected">❌ ${counts.rejected} rejetés</span>
      <span class="badge badge-draft">✏️ ${counts.needs_edit} à modifier</span>
    `;
  }

  if (!drafts.length) {
    container.innerHTML = '<p style="color:#6B7280;text-align:center;padding:40px">Aucun brouillon trouvé.</p>';
    return;
  }

  container.innerHTML = drafts.map(function(d) {
    var title = (d.title && d.title.fr) || 'Sans titre';
    var typeLabels = { skill: '🧩 Skill', lesson: '📖 Lesson', project: '🚀 Project', quiz: '❓ Quiz', code: '💻 Code', news: '📰 News', tip: '💡 Tip', curriculum: '📋 Curriculum' };
    var typeLabel = typeLabels[d.type] || d.type;
    var statusBadge = d.status === 'pending' ? '<span class="badge badge-pending">⏳ En attente</span>' :
                       d.status === 'approved' ? '<span class="badge badge-approved">✅ Approuvé</span>' :
                       d.status === 'rejected' ? '<span class="badge badge-rejected">❌ Rejeté</span>' :
                       '<span class="badge badge-draft">✏️ À modifier</span>';
    var dateStr = d.created_at ? new Date(d.created_at).toLocaleDateString('fr-FR') : '';

    var actions = '';
    if (d.status === 'pending' || d.status === 'needs_edit') {
      actions = `
        <button class="btn-secondary" style="padding:6px 14px;font-size:12px" onclick="reviewDraft('${d.id}')">👁 Relire</button>
        <button class="btn-success" style="padding:6px 14px;font-size:12px" onclick="approveDraftWorkflow('${d.id}')">✅ Approuver</button>
        <button class="btn-danger" style="padding:6px 14px;font-size:12px" onclick="rejectDraftWorkflow('${d.id}')">❌ Rejeter</button>
      `;
    }

    return `
      <div class="draft-item" data-status="${d.status}">
        <div style="display:flex;align-items:center;gap:16px;flex:1">
          <div style="width:48px;height:48px;background:#6366f120;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px">${typeLabel.split(' ')[0]}</div>
          <div style="flex:1">
            <h4 style="margin:0 0 4px 0;color:#fff;font-size:15px">${skEscape(title)}</h4>
            <p style="margin:0;color:#94a3b8;font-size:12px">${typeLabel} · ${dateStr} · Généré par IA</p>
          </div>
          ${statusBadge}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">${actions}</div>
      </div>
    `;
  }).join('');
}

function filterWorkflow(status) {
  loadWorkflowDrafts(status);
}

async function approveDraftWorkflow(id) {
  var res = await sb.from('content_drafts').update({ status: 'approved', reviewed_at: new Date().toISOString() }).eq('id', id);
  if (res.error) { alert('Erreur: ' + res.error.message); return; }
  loadWorkflowDrafts();
}

async function rejectDraftWorkflow(id) {
  var res = await sb.from('content_drafts').update({ status: 'rejected', reviewed_at: new Date().toISOString() }).eq('id', id);
  if (res.error) { alert('Erreur: ' + res.error.message); return; }
  loadWorkflowDrafts();
}

function reviewDraft(id) {
  // Open review modal with draft content
  openReviewModal(id);
}

// ============================================================
// TAB: RESEARCH — AI Research Engine
// ============================================================
function initResearchTab() {
  loadResearchSources();
  loadOutdatedContent();
  loadResearchSuggestions();
}

async function loadResearchSources() {
  var container = document.getElementById('research-sources');
  if (!container) return;

  var res = await sb.from('research_sources').select('*').order('name');
  if (res.error) { container.innerHTML = '<p style="color:#ef4444">Erreur</p>'; return; }

  var sources = res.data || [];
  container.innerHTML = sources.map(function(s) {
    var statusColor = s.is_active ? '#22c55e' : '#ef4444';
    var lastFetch = s.last_fetched_at ? new Date(s.last_fetched_at).toLocaleDateString('fr-FR') : 'Jamais';
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#0f0f1a;border-radius:8px;margin-bottom:8px">
        <div>
          <div style="color:#e2e8f0;font-size:13px;font-weight:600">${skEscape(s.name)}</div>
          <div style="color:#6B7280;font-size:11px">${skEscape(s.url)} · ${s.type} · ${s.fetch_interval_minutes}min</div>
        </div>
        <div style="text-align:right">
          <div style="color:${statusColor};font-size:12px">${s.is_active ? '● Actif' : '○ Inactif'}</div>
          <div style="color:#6B7280;font-size:10px">Dernier: ${lastFetch}</div>
        </div>
      </div>
    `;
  }).join('');
}

async function loadOutdatedContent() {
  var container = document.getElementById('research-outdated');
  if (!container) return;

  var res = await sb.from('outdated_content').select('*').eq('status', 'detected').order('detected_at', { ascending: false }).limit(10);
  if (res.error) { container.innerHTML = '<p style="color:#ef4444">Erreur</p>'; return; }

  var items = res.data || [];
  if (!items.length) {
    container.innerHTML = '<p style="color:#6B7280;font-size:13px">Aucun contenu obsolète détecté. 🎉</p>';
    return;
  }

  container.innerHTML = items.map(function(item) {
    return `
      <div style="padding:12px;background:#0f0f1a;border-radius:8px;margin-bottom:8px;border-left:3px solid #f59e0b">
        <div style="color:#e2e8f0;font-size:13px;font-weight:600">${skEscape(item.content_type)}: ${skEscape(item.content_id)}</div>
        <div style="color:#94a3b8;font-size:12px;margin-top:4px">${skEscape(item.reason)}</div>
        ${item.suggested_update ? `<div style="color:#4ADE80;font-size:11px;margin-top:4px">💡 Suggéré: ${skEscape(item.suggested_update)}</div>` : ''}
        <div style="display:flex;gap:8px;margin-top:8px">
          <button class="btn-primary" style="padding:6px 12px;font-size:11px" onclick="queueUpdate('${item.id}')">🚀 Mettre à jour</button>
          <button class="btn-secondary" style="padding:6px 12px;font-size:11px" onclick="ignoreOutdated('${item.id}')">🚫 Ignorer</button>
        </div>
      </div>
    `;
  }).join('');
}

async function loadResearchSuggestions() {
  var container = document.getElementById('research-suggestions');
  if (!container) return;

  // This would come from the AI analysis of trends
  // For now, show a placeholder based on article gaps
  var [skillsRes, articlesRes] = await Promise.all([
    sb.from('skills_content').select('skill_id, payload'),
    sb.from('articles').select('category_slug')
  ]);

  var skills = skillsRes.data || [];
  var articleCats = (articlesRes.data || []).map(function(a) { return a.category_slug; });

  var suggestions = [];
  skills.forEach(function(s) {
    var skillId = s.skill_id;
    var hasArticles = articleCats.indexOf(skillId) !== -1;
    if (!hasArticles) {
      suggestions.push({
        type: 'news_gap',
        title: 'Créer un fil d\'actualités pour "' + ((s.payload && s.payload.title && s.payload.title.fr) || skillId) + '"',
        skill_id: skillId
      });
    }
  });

  if (!suggestions.length) {
    container.innerHTML = '<p style="color:#6B7280;font-size:13px">Toutes les skills ont du contenu news. 👍</p>';
    return;
  }

  container.innerHTML = suggestions.slice(0, 5).map(function(s) {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:#0f0f1a;border-radius:8px;margin-bottom:8px">
        <div>
          <div style="color:#e2e8f0;font-size:13px">${skEscape(s.title)}</div>
          <div style="color:#94a3b8;font-size:11px;margin-top:2px">Gap détecté par l'IA</div>
        </div>
        <button class="btn-primary" style="padding:6px 14px;font-size:12px" onclick="generateNewsForSkill('${s.skill_id}')">🚀 Générer</button>
      </div>
    `;
  }).join('');
}

async function runResearchEngine() {
  var btn = document.getElementById('research-run-btn');
  if (btn) { btn.textContent = '⏳ Analyse en cours...'; btn.disabled = true; }

  try {
    var res = await fetch(SUPABASE_URL + '/functions/v1/enrich-skills', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json'
      }
    });
    var data = await res.json();

    if (btn) { btn.textContent = '🔬 Lancer la veille'; btn.disabled = false; }

    // Log the research run
    await sb.from('research_logs').insert({
      action: 'manual_research_run',
      details: { result: data }
    });

    loadResearchSources();
    loadOutdatedContent();
    loadResearchSuggestions();

    alert('Veille terminée! ' + (data.suggestions || 0) + ' suggestions trouvées.');
  } catch (err) {
    if (btn) { btn.textContent = '🔬 Lancer la veille'; btn.disabled = false; }
    alert('Erreur: ' + err.message);
  }
}

async function queueUpdate(id) {
  await sb.from('outdated_content').update({ status: 'queued' }).eq('id', id);
  loadOutdatedContent();
}

async function ignoreOutdated(id) {
  await sb.from('outdated_content').update({ status: 'ignored' }).eq('id', id);
  loadOutdatedContent();
}

async function generateNewsForSkill(skillId) {
  // Trigger news generation for a specific skill
  alert('Génération de news pour ' + skillId + '... (à implémenter avec Edge Function)');
}

// ============================================================
// TAB: ANALYTICS — Stats étudiants + productivité IA
// ============================================================
function initAnalyticsTab() {
  loadAnalyticsStats();
  loadAnalyticsCharts();
  loadAnalyticsProductivity();
}

async function loadAnalyticsStats() {
  var container = document.getElementById('analytics-stats');
  if (!container) return;

  var [codesRes, activityRes, articlesRes, draftsRes] = await Promise.all([
    sb.from('access_codes').select('used'),
    sb.from('student_activity').select('id', { count: 'exact', head: true }),
    sb.from('articles').select('views_count'),
    sb.from('content_drafts').select('status')
  ]);

  var totalCodes = (codesRes.data || []).length;
  var usedCodes = (codesRes.data || []).filter(function(c) { return c.used; }).length;
  var totalActivity = activityRes.count || 0;
  var totalViews = (articlesRes.data || []).reduce(function(sum, a) { return sum + (a.views_count || 0); }, 0);
  var approvedDrafts = (draftsRes.data || []).filter(function(d) { return d.status === 'approved'; }).length;
  var totalDrafts = (draftsRes.data || []).length;
  var approvalRate = totalDrafts > 0 ? Math.round((approvedDrafts / totalDrafts) * 100) : 0;

  container.innerHTML = `
    <div class="admin-stats">
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#6366f1">${totalCodes}</div>
        <div class="admin-stat-lbl">Codes générés</div>
        <div style="font-size:11px;color:#22c55e;margin-top:4px">${usedCodes} utilisés</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#8b5cf6">${totalActivity}</div>
        <div class="admin-stat-lbl">Actions étudiants</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#22c55e">${totalViews}</div>
        <div class="admin-stat-lbl">Vues articles</div>
      </div>
      <div class="admin-stat-card glass">
        <div class="admin-stat-num" style="color:#f59e0b">${approvalRate}%</div>
        <div class="admin-stat-lbl">Taux d'approbation IA</div>
      </div>
    </div>
  `;
}

async function loadAnalyticsCharts() {
  var container = document.getElementById('analytics-charts');
  if (!container) return;

  // Get content distribution by skill
  var skillsRes = await sb.from('skills_content').select('payload');
  var skills = skillsRes.data || [];

  var skillNames = [];
  var lessonCounts = [];
  skills.slice(0, 6).forEach(function(s) {
    var title = (s.payload && s.payload.title && s.payload.title.fr) || '?';
    var lessons = (s.payload && s.payload.levels) ? s.payload.levels.reduce(function(n, lv) {
      return n + ((lv.lessons && lv.lessons.length) || 0);
    }, 0) : 0;
    skillNames.push(title);
    lessonCounts.push(lessons);
  });

  // Simple bar chart using CSS
  var maxLessons = Math.max.apply(null, lessonCounts.concat([1]));
  var colors = ['#6366f1', '#8b5cf6', '#22c55e', '#f59e0b', '#06b6d4', '#ec4899'];

  container.innerHTML = `
    <div class="admin-table-wrap glass" style="margin-bottom:20px">
      <div class="admin-table-title">📊 Répartition des leçons par skill</div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:10px 0">
        ${skillNames.map(function(name, i) {
          var pct = (lessonCounts[i] / maxLessons) * 100;
          return `
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                <span style="color:#e2e8f0;font-size:12px">${skEscape(name)}</span>
                <span style="color:#94a3b8;font-size:12px">${lessonCounts[i]} leçons</span>
              </div>
              <div style="background:#0f0f1a;border-radius:8px;height:24px;overflow:hidden">
                <div style="width:${pct}%;height:100%;background:${colors[i % colors.length]};border-radius:8px;transition:width .5s;display:flex;align-items:center;justify-content:flex-end;padding-right:8px">
                  <span style="color:#fff;font-size:10px;font-weight:700">${lessonCounts[i]}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

async function loadAnalyticsProductivity() {
  var container = document.getElementById('analytics-productivity');
  if (!container) return;

  var [draftsRes, articlesRes, logsRes] = await Promise.all([
    sb.from('content_drafts').select('type,status,created_at'),
    sb.from('articles').select('status,ai_generated'),
    sb.from('research_logs').select('action,created_at').order('created_at', { ascending: false }).limit(20)
  ]);

  var drafts = draftsRes.data || [];
  var byType = {};
  drafts.forEach(function(d) {
    byType[d.type] = (byType[d.type] || 0) + 1;
  });

  var aiArticles = (articlesRes.data || []).filter(function(a) { return a.ai_generated; }).length;

  container.innerHTML = `
    <div class="admin-table-wrap glass">
      <div class="admin-table-title">🤖 Productivité IA</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px">
        <div style="padding:12px;background:#0f0f1a;border-radius:10px">
          <div style="color:#94a3b8;font-size:11px">Brouillons générés</div>
          <div style="color:#6366f1;font-size:24px;font-weight:800">${drafts.length}</div>
        </div>
        <div style="padding:12px;background:#0f0f1a;border-radius:10px">
          <div style="color:#94a3b8;font-size:11px">Articles IA publiés</div>
          <div style="color:#22c55e;font-size:24px;font-weight:800">${aiArticles}</div>
        </div>
      </div>
      <div style="color:#94a3b8;font-size:12px;margin-bottom:8px">Par type de contenu:</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${Object.keys(byType).map(function(type) {
          var typeLabels = { skill: '🧩 Skills', lesson: '📖 Leçons', project: '🚀 Projets', quiz: '❓ Quiz', code: '💻 Code', news: '📰 News', tip: '💡 Tips' };
          return `<span style="background:#1C1C28;color:#A78BFA;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600">${typeLabels[type] || type}: ${byType[type]}</span>`;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// REVIEW MODAL — Pour relire et éditer un brouillon
// ============================================================
var reviewingDraftId = null;

async function openReviewModal(draftId) {
  reviewingDraftId = draftId;
  var res = await sb.from('content_drafts').select('*').eq('id', draftId).maybeSingle();
  if (res.error || !res.data) { alert('Brouillon introuvable'); return; }

  var draft = res.data;
  var title = (draft.title && draft.title.fr) || 'Sans titre';

  document.getElementById('review-draft-title').value = title;
  document.getElementById('review-draft-content').value = JSON.stringify(draft.content, null, 2);
  document.getElementById('review-draft-notes').value = '';
  document.getElementById('review-modal').style.display = 'flex';
}

function closeReviewModal() {
  document.getElementById('review-modal').style.display = 'none';
  reviewingDraftId = null;
}

async function saveDraftReview() {
  if (!reviewingDraftId) return;
  var title = document.getElementById('review-draft-title').value;
  var contentStr = document.getElementById('review-draft-content').value;
  var notes = document.getElementById('review-draft-notes').value;

  try {
    var content = JSON.parse(contentStr);
    await sb.from('content_drafts').update({
      title: { fr: title, ar: '', en: '' },
      content: content,
      status: 'needs_edit',
      reviewed_at: new Date().toISOString()
    }).eq('id', reviewingDraftId);
    closeReviewModal();
    loadWorkflowDrafts();
  } catch(e) {
    alert('Erreur JSON: ' + e.message);
  }
}

async function approveFromReviewModal() {
  if (!reviewingDraftId) return;
  await sb.from('content_drafts').update({
    status: 'approved',
    reviewed_at: new Date().toISOString()
  }).eq('id', reviewingDraftId);
  closeReviewModal();
  loadWorkflowDrafts();
}

async function rejectFromReviewModal() {
  if (!reviewingDraftId) return;
  await sb.from('content_drafts').update({
    status: 'rejected',
    reviewed_at: new Date().toISOString()
  }).eq('id', reviewingDraftId);
  closeReviewModal();
  loadWorkflowDrafts();
}
'''


