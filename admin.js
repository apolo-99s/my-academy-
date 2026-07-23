
# Create the fixed admin.js file
admin_js_fixed = '''// ============================================================
// ADMIN.JS — Digital Skills Academy Admin Dashboard
// ⚠️ SECURITY NOTE: this password only hides the page from casual
// visitors — it is visible in plain text to anyone who reads this
// file's source, so it does NOT protect real business data on its
// own. Real protection comes from Supabase Row Level Security.
// Change the password below, and don't reuse a password you use elsewhere.
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

  // FIXED: Use select('*') to avoid column-not-exists errors
  // This automatically adapts to whatever columns exist in the table
  var codesRes = await sb.from('access_codes')
    .select('*')
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

  // FIXED: Handle progress table with or without 'code' column
  var progressByCode = {};
  try {
    var progressRes = await sb.from('progress').select('*');
    if (!progressRes.error && progressRes.data) {
      progressRes.data.forEach(function(row) {
        // Try 'code' first, fallback to other possible column names
        var codeKey = row.code || row.user_code || row.activation_code;
        if (codeKey) {
          progressByCode[codeKey] = (progressByCode[codeKey] || 0) + 1;
        }
      });
    }
  } catch(e) {
    console.log('[Admin] Progress table error (non-critical):', e);
  }

  var rows = codes.map(function(c) {
    var usedDate = c.used_at ? new Date(c.used_at).toLocaleDateString('fr-FR') : '—';
    var lessonsCount = progressByCode[c.code] || 0;
    
    // FIXED: Safely access student_name and student_phone with fallbacks
    var studentName = c.student_name || '—';
    var studentPhone = c.student_phone || '';
    var studentInfo = studentName;
    if (studentPhone && studentPhone !== '—') {
      studentInfo += ' <span style="color:#6B7280;font-size:11px">(' + studentPhone + ')</span>';
    }
    
    return '<tr>' +
      '<td style="font-family:monospace;letter-spacing:1px">' + c.code + '</td>' +
      '<td><span class="admin-badge ' + (c.used ? 'used' : 'free') + '">' + (c.used ? '✓ Utilisé' : 'Disponible') + '</span></td>' +
      '<td>' + studentInfo + '</td>' +
      '<td>' + usedDate + '</td>' +
      '<td>' + lessonsCount + '</td>' +
      '</tr>';
  }).join('');

  table.innerHTML =
    '<thead><tr><th>Code</th><th>Statut</th><th>Élève</th><th>Utilisé le</th><th>Leçons faites</th></tr></thead><tbody>' + rows + '</tbody>';
}

// Auto-login check on page load
(function() {
  if (sessionStorage.getItem('adminAuth') === 'true') {
    showAdminPanel();
  } else {
    document.getElementById('admin-login').style.display = 'flex';
  }
})();
'''

with open('/mnt/agents/output/admin.js', 'w') as f:
    f.write(admin_js_fixed)

print("✅ admin.js fixed and saved!")
print(f"File size: {len(admin_js_fixed)} characters")
