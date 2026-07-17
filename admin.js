// ============================================================
// ADMIN.JS
// ⚠️ SECURITY NOTE: this password only hides the page from casual
// visitors — it is visible in plain text to anyone who reads this
// file's source, so it does NOT protect real business data on its
// own. Real protection comes from Supabase Row Level Security
// (see supabase-schema.sql). Change the password below, and don't
// reuse a password you use elsewhere.
// ============================================================
var ADMIN_PASSWORD = 'Fycal2299';

function adminLogin() {
  var val = document.getElementById('admin-pass-input').value;
  var err = document.getElementById('admin-login-error');
  if (val !== ADMIN_PASSWORD) {
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  sessionStorage.setItem('adminAuth', 'true');
  showAdminPanel();
}

function adminLogout() {
  sessionStorage.removeItem('adminAuth');
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-pass-input').value = '';
}

function showAdminPanel() {
  document.getElementById('admin-login').style.display = 'none';
  document.getElementById('admin-panel').style.display = 'flex';
  renderAdminStats();
}

async function renderAdminStats() {
  var table = document.getElementById('codes-table');
  table.innerHTML = '<tbody><tr><td style="padding:16px;color:#6B7280">Chargement…</td></tr></tbody>';

  var codesRes = await sb.from('access_codes')
    .select('code, used, used_at, student_name, student_phone')
    .order('code');

  if (codesRes.error) {
    table.innerHTML = '<tbody><tr><td style="padding:16px;color:#F87171">Erreur de connexion à Supabase : ' + codesRes.error.message + '</td></tr></tbody>';
    return;
  }

  var codes = codesRes.data;
  var total = codes.length;
  var usedCount = codes.filter(function(c) { return c.used; }).length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-used').textContent = usedCount;
  document.getElementById('stat-remaining').textContent = total - usedCount;

  var progressRes = await sb.from('progress').select('code');
  var progressByCode = {};
  if (!progressRes.error && progressRes.data) {
    progressRes.data.forEach(function(row) {
      progressByCode[row.code] = (progressByCode[row.code] || 0) + 1;
    });
  }

  var rows = codes.map(function(c) {
    var usedDate = c.used_at ? new Date(c.used_at).toLocaleDateString('fr-FR') : '—';
    var lessonsCount = progressByCode[c.code] || 0;
    return '<tr>' +
      '<td style="font-family:monospace;letter-spacing:1px">' + c.code + '</td>' +
      '<td><span class="admin-badge ' + (c.used ? 'used' : 'free') + '">' + (c.used ? '✓ Utilisé' : 'Disponible') + '</span></td>' +
      '<td>' + (c.student_name || '—') + '</td>' +
      '<td>' + usedDate + '</td>' +
      '<td>' + lessonsCount + '</td>' +
      '</tr>';
  }).join('');

  table.innerHTML =
    '<thead><tr><th>Code</th><th>Statut</th><th>Élève</th><th>Utilisé le</th><th>Leçons faites</th></tr></thead><tbody>' + rows + '</tbody>';
}

(function() {
  if (sessionStorage.getItem('adminAuth') === 'true') {
    showAdminPanel();
  } else {
    document.getElementById('admin-login').style.display = 'flex';
  }
})();
