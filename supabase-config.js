// SteadFlow — Supabase connection config
//
// HOW TO FILL THIS IN:
// 1. In your Supabase project, go to Project Settings > API
// 2. Copy the "Project URL" and paste it below as SUPABASE_URL
// 3. Copy the "anon / public" key and paste it below as SUPABASE_ANON_KEY
//    (never use the "service_role" key here — that one must stay private, server-side only)
//
// Until you fill these in, account.html will show a friendly warning instead of crashing.

const SUPABASE_URL = 'https://drskychdkzctkyesdfum.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_IwE8k7AXycefsAjoK74UbQ_S5yuv414';

let supabaseClient = null;
let SUPABASE_CONFIGURED = false;

if (
  typeof window.supabase !== 'undefined' &&
  SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL_HERE' &&
  SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY_HERE'
) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  SUPABASE_CONFIGURED = true;
}
