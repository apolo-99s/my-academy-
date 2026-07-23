
# Create the complete fixed admin.js with the real Supabase credentials
admin_js_complete = '''// ============================================================
// ADMIN.JS — Digital Skills Academy Admin Dashboard
// Autonomous version (no dependency on supabase-client.js)
// ============================================================
var ADMIN_PASSWORD = 'Fycal2299';

// Supabase config — REAL credentials
var SUPABASE_URL = 'https://vvqkxtiepgxvymhtllwa.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cWt4dGllcGd4dnltaHRsbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NDQ0NDgsImV4cCI6MjEwMDMyMDQ0OH0.oaY-_zDZDFVuIuv4szLyJRZ8cnfDyOlg7mbPtRG0yTE';

// Initialize Supabase client
var sb = supabase.createClient(https://myrhxpctkbxkfkrxtjfs.supabase.co', eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2cWt4dGllcGd4dnltaHRsbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NDQ0NDgsImV4cCI6MjEwMDMyMDQ0OH0.oaY-_zDZDFVuIuv4szLyJRZ8cnfDyOlg7mbPtRG0yTE);
console.log('[Admin] Supabase client initialized');

// ============================================================
// AUTH
// ============================================================
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

// ============================================================
// STATS RENDERER
// ============================================================
async function renderAdminStats() {
  var table = document.getElementById('codes-table');
  table.innerHTML = '<tbody><tr><td style="padding:16px;color:#6B7280">Chargement…</td></tr></tbody>';

  try {
    // Fetch all codes with all columns (robust against schema changes)
    var codesRes = await sb.from('access_codes')
      .select('*')
      .order('code');

    if (codesRes.error) {
      table.innerHTML = '<tbody><tr><td style="padding:16px;color:#F87171">Erreur Supabase : ' + codesRes.error.message + '</td></tr></tbody>';
      console.error('[Admin] Supabase error:', codesRes.error);
      return;
    }

    var codes = codesRes.data || [];
    var total = codes.length;
    var usedCount = codes.filter(function(c) { return c.used === true; }).length;
    var availableCount = total - usedCount;

    // Update stat cards
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-used').textContent = usedCount;
    document.getElementById('stat-remaining').textContent = availableCount;

    // Fetch progress data (with error handling)
    var progressByCode = {};
    try {
      var progressRes = await sb.from('progress').select('*');
      if (!progressRes.error && progressRes.data) {
        progressRes.data.forEach(function(row) {
          var codeKey = row.code || row.user_code || row.activation_code;
          if (codeKey) {
            progressByCode[codeKey] = (progressByCode[codeKey] || 0) + 1;
          }
        });
      }
    } catch(e) {
      console.log('[Admin] Progress table not accessible:', e.message);
    }

    // Build table rows
    var rows = codes.map(function(c) {
      var usedDate = c.used_at 
        ? new Date(c.used_at).toLocaleDateString('fr-FR') 
        : '—';
      var lessonsCount = progressByCode[c.code] || 0;
      
      // Safe field access with fallbacks
      var studentName = c.student_name || '—';
      var studentPhone = c.student_phone || '';
      var studentInfo = studentName;
      if (studentPhone && studentPhone !== '—' && studentPhone !== 'null') {
        studentInfo += ' <span style="color:#6B7280;font-size:11px">(' + studentPhone + ')</span>';
      }
      
      var statusClass = c.used ? 'used' : 'free';
      var statusText = c.used ? '✓ Utilisé' : 'Disponible';
      
      return '<tr>' +
        '<td style="font-family:monospace;letter-spacing:1px">' + c.code + '</td>' +
        '<td><span class="admin-badge ' + statusClass + '">' + statusText + '</span></td>' +
        '<td>' + studentInfo + '</td>' +
        '<td>' + usedDate + '</td>' +
        '<td>' + lessonsCount + '</td>' +
        '</tr>';
    }).join('');

    var thead = '<thead><tr>' +
      '<th>Code</th>' +
      '<th>Statut</th>' +
      '<th>Élève</th>' +
      '<th>Utilisé le</th>' +
      '<th>Leçons faites</th>' +
      '</tr></thead>';
    
    var tbody = rows 
      ? '<tbody>' + rows + '</tbody>' 
      : '<tbody><tr><td colspan="5" style="padding:20px;text-align:center;color:#6B7280">Aucun code trouvé</td></tr></tbody>';

    table.innerHTML = thead + tbody;
    
  } catch(err) {
    table.innerHTML = '<tbody><tr><td style="padding:16px;color:#F87171">Erreur inattendue : ' + err.message + '</td></tr></tbody>';
    console.error('[Admin] Fatal error:', err);
  }
}

// ============================================================
// AUTO-LOGIN ON PAGE LOAD
// ============================================================
(function() {
  if (sessionStorage.getItem('adminAuth') === 'true') {
    showAdminPanel();
  } else {
    document.getElementById('admin-login').style.display = 'flex';
  }
})();
'''

with open('/mnt/agents/output/admin.js', 'w') as f:
    f.write(admin_js_complete)

print("✅ admin.js complet généré avec les vraies credentials Supabase!")
print(f"Taille: {len(admin_js_complete)} caractères")
