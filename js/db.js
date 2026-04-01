/* ================================================================
   BESITS — Supabase Backend Client
   ================================================================ */

const SUPA_URL = 'https://irsywbqghfrfdashnpqz.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3l3YnFnaGZyZmRhc2hucHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNjE3ODQsImV4cCI6MjA5MDYzNzc4NH0.0j6CMv95ZaKh84ro4R7tqPTiaPhB4jb4i-F4io3W1Gw';

/* ── Safe init ───────────────────────────────────────────────── */
let db = null;
try {
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    db = supabase.createClient(SUPA_URL, SUPA_KEY);
    console.log('[BESITS] Supabase connected ✓');
  } else {
    console.error('[BESITS] Supabase library not loaded');
  }
} catch (e) {
  console.error('[BESITS] Supabase init error:', e);
}

function dbReady() {
  if (!db) throw new Error('Database not available. Check your internet connection and refresh.');
  return db;
}

/* ── Contact form submission ──────────────────────────────────── */
async function submitContactForm(data) {
  const { error } = await dbReady().from('contact_submissions').insert({
    name:    data.name    || null,
    phone:   data.phone   || null,
    email:   data.email   || null,
    subject: data.subject || null,
    message: data.message || null
  });
  if (error) throw error;
}

/* ── Training registration ───────────────────────────────────── */
async function submitTrainingForm(data) {
  const { error } = await dbReady().from('training_registrations').insert({
    name:           data.name    || null,
    phone:          data.phone   || null,
    email:          data.email   || null,
    program:        data.program || null,
    preferred_date: data.date    || null,
    message:        data.message || null
  });
  if (error) throw error;
}

/* ── Newsletter signup ───────────────────────────────────────── */
async function subscribeNewsletter(email) {
  const { error } = await dbReady()
    .from('newsletter_signups')
    .upsert(
      { email: email.toLowerCase().trim(), status: 'subscribed' },
      { onConflict: 'email' }
    );
  if (error) throw error;
}

/* ── Site content sync (admin CMS) ──────────────────────────── */
async function saveContentToCloud(contentObj) {
  const { error } = await dbReady().from('site_content').upsert({
    id: 1,
    content: contentObj,
    updated_at: new Date().toISOString()
  });
  if (error) throw error;
}

async function loadContentFromCloud() {
  const { data, error } = await dbReady()
    .from('site_content')
    .select('content')
    .eq('id', 1)
    .maybeSingle();
  if (error || !data) return null;
  return data.content || null;
}

/* ── Admin: fetch submissions ────────────────────────────────── */
async function getContactSubmissions() {
  const { data, error } = await dbReady()
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

async function getTrainingRegistrations() {
  const { data, error } = await dbReady()
    .from('training_registrations')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

async function getNewsletterSignups() {
  const { data, error } = await dbReady()
    .from('newsletter_signups')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

/* ── Admin: update status ────────────────────────────────────── */
async function markStatus(tableName, id, status) {
  const { error } = await dbReady().from(tableName).update({ status }).eq('id', id);
  if (error) throw error;
}

async function deleteRecord(tableName, id) {
  const { error } = await dbReady().from(tableName).delete().eq('id', id);
  if (error) throw error;
}
