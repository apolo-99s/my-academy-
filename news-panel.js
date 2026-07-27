// ============================================================
// news-panel.js — self-contained slide-in News drawer.
//
// INTEGRATION: add exactly one line to index.html, right before
// </body> (after your other scripts like app.js are loaded):
//
//   <script src="news-panel.js"></script>
//
// That's it. This file injects its own trigger button (bottom-right,
// floating), its own CSS, and the whole sliding panel — nothing else
// in index.html needs to change.
//
// It reuses the page's existing Supabase client if index.html already
// created one as `window.sb` (same pattern as admin.html: var sb =
// supabase.createClient(...)). If not found, it creates its own with
// the same project credentials. Same for the access code: it tries
// the common localStorage keys used elsewhere in this codebase.
// ============================================================

(function () {

  var SUPABASE_URL = 'https://vvqkxtiepgxvymhtllwa.supabase.co';
  var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cWt4dGllcGd4dnltaHRsbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NDQ0NDgsImV4cCI6MjEwMDMyMDQ0OH0.oaY-_zDZDFVuIuv4szLyJRZ8cnfDyOlg7mbPtRG0yTE';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {

    // --------------------------------------------------------
    // 0. Get/create Supabase client (reuse the page's if present)
    // --------------------------------------------------------
    var npSb = window.sb;
    if (!npSb) {
      if (typeof supabase === 'undefined') {
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
        s.onload = function () { npSb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); initPanel(npSb); };
        document.head.appendChild(s);
        return;
      }
      npSb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
    initPanel(npSb);
  });

  function getAccessCode() {
    return localStorage.getItem('accessCode') ||
           localStorage.getItem('academyCode') ||
           localStorage.getItem('code') || null;
  }

  function esc(str) {
    return String(str || '').replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  var STRINGS = {
    fr: { title:'Le Bulletin', search:'Rechercher...', all:'Toutes', latest:'🕐 Récent', trending:'🔥 Top', featured:'⭐ IA', saved:'🔖 Sauvés', empty:'Aucun article.', loading:'Chargement...', why:"Pourquoi c'est important", takeaways:'À retenir', continueWith:'Continuer avec', save:'Sauvegarder', saved2:'Sauvegardé', readSource:'Lire la source →', back:'← Retour' },
    ar: { title:'النشرة', search:'دور...', all:'الكل', latest:'🕐 جديد', trending:'🔥 رائج', featured:'⭐ ذكاء اصطناعي', saved:'🔖 محفوظ', empty:'ما كاين حتى مقال.', loading:'كاين التحميل...', why:'علاش هذا مهم', takeaways:'خاصك تعرف', continueWith:'كمل مع', save:'احفظ', saved2:'محفوظ', readSource:'اقرا المصدر ←', back:'→ رجوع' },
    en: { title:'The Bulletin', search:'Search...', all:'All', latest:'🕐 Latest', trending:'🔥 Top', featured:'⭐ AI Picks', saved:'🔖 Saved', empty:'No articles.', loading:'Loading...', why:'Why it matters', takeaways:'Key takeaways', continueWith:'Continue with', save:'Save', saved2:'Saved', readSource:'Read source →', back:'← Back' }
  };

  function initPanel(sbClient) {
    injectStyles();
    injectMarkup();

    var state = { lang: 'fr', category: 'all', sort: 'latest', categories: [], savedIds: [], view: 'list' };

    // ---- STYLE INJECTION ----
    function injectStyles() {
      var css = document.createElement('style');
      css.textContent = [
        '#npTrigger{position:fixed;bottom:20px;right:20px;z-index:9998;background:linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%);color:#fff;border:none;width:56px;height:56px;border-radius:50%;font-size:22px;cursor:pointer;box-shadow:0 4px 16px rgba(124,58,237,.5);}',
        '#npOverlay{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:9999;opacity:0;pointer-events:none;transition:opacity .25s;}',
        '#npOverlay.show{opacity:1;pointer-events:auto;}',
        '#npPanel{position:fixed;top:0;right:0;height:100vh;width:min(420px,92vw);background:#0B0B10;border-left:1px solid #1C1C28;z-index:10000;transform:translateX(100%);transition:transform .3s ease;display:flex;flex-direction:column;font-family:inherit;}',
        '#npPanel.show{transform:translateX(0);}',
        '.np-head{padding:16px;border-bottom:1px solid #1C1C28;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-shrink:0;}',
        '.np-head h3{color:#fff;font-size:16px;margin:0;}',
        '.np-close{background:#1C1C28;border:none;color:#E5E7EB;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:15px;flex-shrink:0;}',
        '.np-langs{display:flex;gap:4px;background:#111118;border:1px solid #1C1C28;border-radius:8px;padding:3px;}',
        '.np-lang-btn{background:none;border:none;color:#9CA3AF;font-size:11px;font-weight:700;padding:5px 8px;border-radius:6px;cursor:pointer;}',
        '.np-lang-btn.active{background:#7C3AED;color:#fff;}',
        '.np-search{padding:12px 16px;flex-shrink:0;}',
        '.np-search input{width:100%;background:#111118;border:1px solid #1C1C28;border-radius:10px;padding:10px 14px;color:#E5E7EB;font-size:13px;}',
        '.np-cats{display:flex;gap:6px;overflow-x:auto;padding:0 16px 10px;flex-shrink:0;scrollbar-width:none;}',
        '.np-cats::-webkit-scrollbar{display:none;}',
        '.np-pill{flex-shrink:0;background:#111118;border:1px solid #1C1C28;color:#9CA3AF;padding:6px 12px;border-radius:16px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;}',
        '.np-pill.active{background:linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%);color:#fff;border-color:#7C3AED;}',
        '.np-tabs{display:flex;gap:6px;padding:0 16px 12px;flex-wrap:wrap;flex-shrink:0;}',
        '.np-tab{background:#1C1C28;border:1px solid #374151;color:#9CA3AF;padding:6px 10px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;}',
        '.np-tab.active{background:linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%);color:#fff;border-color:#7C3AED;}',
        '.np-body{flex:1;overflow-y:auto;padding:0 16px 16px;}',
        '.np-card{background:#111118;border:1px solid #1C1C28;border-radius:12px;padding:12px;margin-bottom:10px;cursor:pointer;position:relative;}',
        '.np-card:hover{border-color:#7C3AED;}',
        '.np-card img{width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:8px;}',
        '.np-meta{font-family:monospace;font-size:9px;color:#6B7280;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:flex;gap:6px;flex-wrap:wrap;}',
        '.np-card-title{font-size:13px;font-weight:700;color:#E5E7EB;line-height:1.35;margin-bottom:4px;}',
        '.np-card-summary{font-size:11.5px;color:#9CA3AF;line-height:1.5;}',
        '.np-card-foot{display:flex;justify-content:space-between;align-items:center;margin-top:8px;}',
        '.np-skill-chip{font-size:9px;background:#1C1C28;color:#A78BFA;padding:2px 7px;border-radius:5px;}',
        '.np-save-btn{background:none;border:none;font-size:15px;cursor:pointer;opacity:.7;}',
        '.np-empty{text-align:center;color:#6B7280;font-size:12px;padding:40px 10px;}',
        '.np-pinned{position:absolute;top:8px;left:8px;background:#1E3A5F;color:#60A5FA;font-size:9px;padding:2px 6px;border-radius:5px;font-weight:700;}',
        '.np-detail-back{background:#1C1C28;border:none;color:#E5E7EB;padding:8px 14px;border-radius:8px;font-size:12px;cursor:pointer;margin-bottom:12px;}',
        '.np-detail img{width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:14px;}',
        '.np-detail h2{color:#fff;font-size:18px;margin:0 0 10px;}',
        '.np-detail .np-summary{color:#9CA3AF;font-size:13px;line-height:1.6;margin-bottom:14px;}',
        '.np-why{background:#1a1a2e;border-left:3px solid #7C3AED;padding:10px 14px;border-radius:8px;font-size:12px;color:#E5E7EB;margin-bottom:14px;}',
        '.np-why b{display:block;margin-bottom:4px;color:#A78BFA;font-size:10px;letter-spacing:1px;text-transform:uppercase;}',
        '.np-takeaways{margin:0 0 14px;padding-left:16px;font-size:12px;color:#9CA3AF;line-height:1.7;}',
        '.np-detail-skills{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;}',
        '.np-detail-skills a{font-size:11px;background:#1C1C28;color:#A78BFA;padding:5px 10px;border-radius:7px;text-decoration:none;font-weight:600;}',
        '.np-detail-actions{display:flex;gap:8px;}',
        '.np-detail-actions button,.np-detail-actions a{flex:1;text-align:center;padding:9px 10px;border-radius:8px;border:none;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none;}',
        '.np-btn-save{background:#1C1C28;color:#E5E7EB;}',
        '.np-btn-save.on{background:#1E3A5F;color:#60A5FA;}',
        '.np-btn-source{background:linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%);color:#fff;}'
      ].join('');
      document.head.appendChild(css);
    }

    // ---- MARKUP INJECTION ----
    function injectMarkup() {
      var trigger = document.createElement('button');
      trigger.id = 'npTrigger';
      trigger.title = 'News';
      trigger.textContent = '📰';
      trigger.onclick = openPanel;
      document.body.appendChild(trigger);

      var overlay = document.createElement('div');
      overlay.id = 'npOverlay';
      overlay.onclick = closePanel;
      document.body.appendChild(overlay);

      var panel = document.createElement('div');
      panel.id = 'npPanel';
      panel.innerHTML =
        '<div class="np-head">' +
          '<h3 id="npTitle">Le Bulletin</h3>' +
          '<div style="display:flex;gap:8px;align-items:center">' +
            '<div class="np-langs">' +
              '<button class="np-lang-btn active" data-lang="fr">FR</button>' +
              '<button class="np-lang-btn" data-lang="ar">AR</button>' +
              '<button class="np-lang-btn" data-lang="en">EN</button>' +
            '</div>' +
            '<button class="np-close">✕</button>' +
          '</div>' +
        '</div>' +
        '<div class="np-search"><input type="text" id="npSearch" placeholder="Rechercher..."></div>' +
        '<div class="np-cats" id="npCats"></div>' +
        '<div class="np-tabs" id="npTabs">' +
          '<button class="np-tab active" data-sort="latest">🕐 Récent</button>' +
          '<button class="np-tab" data-sort="trending">🔥 Top</button>' +
          '<button class="np-tab" data-sort="featured">⭐ IA</button>' +
          '<button class="np-tab" data-sort="saved">🔖 Sauvés</button>' +
        '</div>' +
        '<div class="np-body" id="npBody"></div>';
      document.body.appendChild(panel);

      panel.querySelector('.np-close').onclick = closePanel;
      panel.querySelectorAll('.np-lang-btn').forEach(function (b) {
        b.onclick = function () { setLang(b.getAttribute('data-lang')); };
      });
      panel.querySelectorAll('.np-tab').forEach(function (b) {
        b.onclick = function () { setSort(b.getAttribute('data-sort')); };
      });
      var searchTimer;
      document.getElementById('npSearch').oninput = function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(loadArticles, 350);
      };
    }

    function openPanel() {
      document.getElementById('npOverlay').classList.add('show');
      document.getElementById('npPanel').classList.add('show');
      if (!state.categories.length) loadCategories();
      loadArticles();
    }
    function closePanel() {
      document.getElementById('npOverlay').classList.remove('show');
      document.getElementById('npPanel').classList.remove('show');
    }

    function setLang(lang) {
      state.lang = lang;
      document.querySelectorAll('.np-lang-btn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
      document.getElementById('npPanel').style.direction = lang === 'ar' ? 'rtl' : 'ltr';
      var s = STRINGS[lang];
      document.getElementById('npTitle').textContent = s.title;
      document.getElementById('npSearch').placeholder = s.search;
      document.querySelector('[data-sort="latest"]').textContent = s.latest;
      document.querySelector('[data-sort="trending"]').textContent = s.trending;
      document.querySelector('[data-sort="featured"]').textContent = s.featured;
      document.querySelector('[data-sort="saved"]').textContent = s.saved;
      renderCatPills();
      loadArticles();
    }

    function setCategory(slug) {
      state.category = slug;
      document.querySelectorAll('.np-pill').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-cat') === slug);
      });
      loadArticles();
    }

    function setSort(sort) {
      state.sort = sort;
      document.querySelectorAll('.np-tab').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-sort') === sort);
      });
      loadArticles();
    }

    async function loadCategories() {
      var res = await sbClient.from('categories').select('slug, name_fr, name_ar, name_en').order('sort_order');
      if (res.error || !res.data) return;
      state.categories = res.data;
      renderCatPills();
    }
    function renderCatPills() {
      var nameKey = 'name_' + state.lang;
      var html = '<button class="np-pill' + (state.category === 'all' ? ' active' : '') + '" data-cat="all">' + STRINGS[state.lang].all + '</button>';
      html += state.categories.map(function (c) {
        return '<button class="np-pill' + (state.category === c.slug ? ' active' : '') + '" data-cat="' + c.slug + '">' + (c[nameKey] || c.name_fr) + '</button>';
      }).join('');
      var wrap = document.getElementById('npCats');
      wrap.innerHTML = html;
      wrap.querySelectorAll('.np-pill').forEach(function (b) {
        b.onclick = function () { setCategory(b.getAttribute('data-cat')); };
      });
    }

    async function loadSavedIds() {
      var code = getAccessCode();
      if (!code) { state.savedIds = []; return; }
      var res = await sbClient.from('bookmarks').select('article_id').eq('access_code', code).eq('type', 'save');
      state.savedIds = res.data ? res.data.map(function (b) { return b.article_id; }) : [];
    }

    async function loadArticles() {
      var body = document.getElementById('npBody');
      var s = STRINGS[state.lang];
      body.innerHTML = '<div class="np-empty">' + s.loading + '</div>';
      await loadSavedIds();

      var data;
      if (state.sort === 'saved') {
        if (!state.savedIds.length) { body.innerHTML = '<div class="np-empty">' + s.empty + '</div>'; return; }
        var r = await sbClient.from('articles').select('*').in('id', state.savedIds).eq('status', 'approved');
        data = r.data || [];
      } else {
        var q = sbClient.from('articles').select('*').eq('status', 'approved').limit(25);
        if (state.category !== 'all') q = q.eq('category_slug', state.category);
        if (state.sort === 'featured') q = q.eq('is_featured', true);
        var searchVal = document.getElementById('npSearch').value.trim();
        if (searchVal) q = q.or('title_fr.ilike.%' + searchVal + '%,title_en.ilike.%' + searchVal + '%');
        if (state.sort === 'trending') q = q.order('views_count', { ascending: false });
        else q = q.order('is_pinned', { ascending: false }).order('published_at', { ascending: false });
        var r2 = await q;
        data = r2.data || [];
      }
      renderList(data);
    }

    function renderList(articles) {
      var body = document.getElementById('npBody');
      var s = STRINGS[state.lang];
      if (!articles.length) { body.innerHTML = '<div class="np-empty">' + s.empty + '</div>'; return; }

      body.innerHTML = articles.map(function (a) {
        var title = esc(a['title_' + state.lang] || a.title_fr || a.title);
        var summary = esc(a['summary_' + state.lang] || a.summary_fr || '');
        var img = a.image_url ? '<img src="' + esc(a.image_url) + '" onerror="this.style.display=\'none\'">' : '';
        var isSaved = state.savedIds.indexOf(a.id) !== -1;
        var pinned = a.is_pinned ? '<div class="np-pinned">📌</div>' : '';
        var skills = (a.affected_skills || []).slice(0, 2).map(function (sk) { return '<span class="np-skill-chip">' + esc(sk) + '</span>'; }).join('');
        return '<div class="np-card" data-id="' + a.id + '">' + pinned + img +
          '<div class="np-meta"><span>' + esc(a.category_slug || '') + '</span><span>·</span><span>' + (a.reading_time_min || 3) + 'min</span></div>' +
          '<div class="np-card-title">' + title + '</div>' +
          '<div class="np-card-summary">' + summary + '</div>' +
          '<div class="np-card-foot"><div>' + skills + '</div><button class="np-save-btn" data-save="' + a.id + '">' + (isSaved ? '🔖' : '📑') + '</button></div>' +
        '</div>';
      }).join('');

      body.querySelectorAll('.np-card').forEach(function (card) {
        card.onclick = function (e) {
          if (e.target.getAttribute('data-save')) return;
          openDetail(card.getAttribute('data-id'));
        };
      });
      body.querySelectorAll('[data-save]').forEach(function (btn) {
        btn.onclick = function (e) { e.stopPropagation(); toggleSave(btn.getAttribute('data-save')); };
      });
    }

    async function toggleSave(articleId) {
      var code = getAccessCode();
      if (!code) { alert('Connecte-toi avec ton code académie pour sauvegarder des articles.'); return; }
      var isSaved = state.savedIds.indexOf(articleId) !== -1;
      if (isSaved) await sbClient.from('bookmarks').delete().eq('access_code', code).eq('article_id', articleId).eq('type', 'save');
      else await sbClient.from('bookmarks').insert({ access_code: code, article_id: articleId, type: 'save' });
      loadArticles();
    }

    async function openDetail(id) {
      var res = await sbClient.from('articles').select('*').eq('id', id).maybeSingle();
      if (!res.data) return;
      var a = res.data;
      var s = STRINGS[state.lang];

      var code = getAccessCode();
      if (code) sbClient.from('article_views').insert({ access_code: code, article_id: id }).then(function () {});

      var title = esc(a['title_' + state.lang] || a.title_fr || a.title);
      var summary = esc(a['summary_' + state.lang] || a.summary_fr || '');
      var why = a.why_it_matters ? esc(a.why_it_matters[state.lang] || a.why_it_matters.fr || '') : '';
      var takeaways = (a.key_takeaways && a.key_takeaways[state.lang]) || (a.key_takeaways && a.key_takeaways.fr) || [];
      var img = a.image_url ? '<img src="' + esc(a.image_url) + '">' : '';
      var isSaved = state.savedIds.indexOf(a.id) !== -1;
      var skillsHtml = (a.affected_skills || []).map(function (sk) {
        return '<a href="index.html#skill=' + esc(sk) + '">' + s.continueWith + ' ' + esc(sk) + '</a>';
      }).join('');

      var body = document.getElementById('npBody');
      body.innerHTML =
        '<button class="np-detail-back" id="npBack">' + s.back + '</button>' +
        '<div class="np-detail">' + img +
          '<h2>' + title + '</h2>' +
          '<div class="np-summary">' + summary + '</div>' +
          (why ? '<div class="np-why"><b>' + s.why + '</b>' + why + '</div>' : '') +
          (takeaways.length ? '<div style="font-size:10px;letter-spacing:1px;color:#6B7280;text-transform:uppercase;margin-bottom:6px">' + s.takeaways + '</div><ul class="np-takeaways">' + takeaways.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '') +
          (skillsHtml ? '<div class="np-detail-skills">' + skillsHtml + '</div>' : '') +
          '<div class="np-detail-actions">' +
            '<button class="np-btn-save' + (isSaved ? ' on' : '') + '" id="npSaveBtn">' + (isSaved ? '🔖 ' + s.saved2 : '📑 ' + s.save) + '</button>' +
            '<a class="np-btn-source" href="' + esc(a.original_url) + '" target="_blank" rel="noopener">' + s.readSource + '</a>' +
          '</div>' +
        '</div>';

      document.getElementById('npBack').onclick = loadArticles;
      document.getElementById('npSaveBtn').onclick = function () { toggleSave(a.id).then(function(){ openDetail(id); }); };
    }
  }

})();
