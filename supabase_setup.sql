-- ================================================================
-- BESITS — Supabase Database Setup
-- Paste this entire file into Supabase → SQL Editor → Run
-- ================================================================

-- 1. Contact form submissions
create table if not exists contact_submissions (
  id          uuid        default gen_random_uuid() primary key,
  name        text        not null,
  phone       text,
  email       text        not null,
  subject     text,
  message     text        not null,
  status      text        default 'new' check (status in ('new', 'read', 'replied')),
  created_at  timestamptz default now()
);

-- 2. Training registrations
create table if not exists training_registrations (
  id             uuid        default gen_random_uuid() primary key,
  name           text        not null,
  phone          text        not null,
  email          text        not null,
  program        text        not null,
  preferred_date date,
  message        text,
  status         text        default 'pending' check (status in ('pending', 'confirmed', 'completed')),
  created_at     timestamptz default now()
);

-- 3. Newsletter signups
create table if not exists newsletter_signups (
  id          uuid        default gen_random_uuid() primary key,
  email       text        unique not null,
  status      text        default 'subscribed' check (status in ('subscribed', 'unsubscribed')),
  created_at  timestamptz default now()
);

-- 4. Site content (CMS data from admin panel)
create table if not exists site_content (
  id         int         primary key default 1,
  content    jsonb       not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- ── Row Level Security ──────────────────────────────────────────
alter table contact_submissions    enable row level security;
alter table training_registrations enable row level security;
alter table newsletter_signups     enable row level security;
alter table site_content           enable row level security;

-- Public: insert into form tables (website visitors)
create policy "anon_insert_contact"
  on contact_submissions for insert to anon with check (true);

create policy "anon_insert_training"
  on training_registrations for insert to anon with check (true);

create policy "anon_upsert_newsletter"
  on newsletter_signups for insert to anon with check (true);

create policy "anon_update_newsletter"
  on newsletter_signups for update to anon using (true);

-- Public: read site_content (CMS data loaded by website)
create policy "anon_read_site_content"
  on site_content for select to anon using (true);

-- Admin (anon key): write site_content, read/update/delete submissions
-- Note: protected by the admin password in the browser (localStorage)
create policy "anon_write_site_content"
  on site_content for all to anon using (true) with check (true);

create policy "anon_read_contact"
  on contact_submissions for select to anon using (true);
create policy "anon_update_contact"
  on contact_submissions for update to anon using (true);
create policy "anon_delete_contact"
  on contact_submissions for delete to anon using (true);

create policy "anon_read_training"
  on training_registrations for select to anon using (true);
create policy "anon_update_training"
  on training_registrations for update to anon using (true);
create policy "anon_delete_training"
  on training_registrations for delete to anon using (true);

create policy "anon_read_newsletter"
  on newsletter_signups for select to anon using (true);
create policy "anon_delete_newsletter"
  on newsletter_signups for delete to anon using (true);
