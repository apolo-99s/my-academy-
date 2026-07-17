// ============================================================
// SUPABASE-CLIENT.JS — shared connection config
// Loaded on every page that needs the database (index.html, admin.html)
// Requires the Supabase JS CDN script to be loaded first.
// ============================================================
var SUPABASE_URL = 'https://myrhxpctkbxkfkrxtjfs.supabase.co';
var SUPABASE_KEY = 'sb_publishable_7eV-URskWryaWzbLQENLbQ_80KDVKRX';
var sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
