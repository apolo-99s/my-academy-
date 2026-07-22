// ============================================================
// SUPABASE CLIENT — DigitalSkills.dz
// ============================================================

// ⚠️ REMPLACE CES 2 VALEURS PAR LES TIENNES DE SUPABASE
const SUPABASE_URL = 'https://vvqkxtiepgxvymhtllwa.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_GZP0iy972Hs6NhzW39CYZQ_bvSKmzIc';

// Création du client Supabase
var sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('[Supabase] Client initialisé');
