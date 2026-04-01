/* ================================================================
   BESITS Admin Dashboard JS
   ================================================================ */

'use strict';

/* ── Default Content ─────────────────────────────────────────── */
const DEFAULT_CONTENT = {
  hero: {
    badge:     "Ghana's #1 Security Company",
    h1:        'We Secure & Power',
    h3:        'Across Ghana.',
    sub:       'BESITS delivers professional CCTV installation, electric fencing, GPS tracking, smart home automation, solar solutions, and IT services — all under one roof.',
    words:     ['Homes', 'Businesses', 'Communities', 'Your Future'],
    cta1Text:  'Explore Services',
    cta1Href:  'services.html',
    cta2Text:  'Get a Free Quote',
    cta2Href:  'contact.html'
  },
  about: {
    tag:         'About BESITS',
    headline:    'Securing Ghana Since 2017',
    desc:        'Berntecho Electronic Security & IT Solutions (BESITS) was founded in Afienya, Ghana with a singular mission: to make professional-grade security and IT solutions accessible to homes, businesses, and communities across the country.',
    year:        '2017',
    badgeLabel:  'Founded in Ghana',
    mission:     'To provide reliable, affordable, and professional electronic security and IT solutions that protect lives and assets across Ghana.',
    vision:      'To be Ghana\'s most trusted technology partner for security, smart automation, and IT services.'
  },
  services: [
    { name: 'CCTV Installation',        desc: 'HD IP camera systems with remote viewing, night vision, and cloud storage.' },
    { name: 'Electric Fencing',          desc: 'High-voltage perimeter protection for residential and commercial properties.' },
    { name: 'GPS Tracking',             desc: 'Real-time vehicle and asset tracking with mobile app alerts.' },
    { name: 'Smart Home Automation',    desc: 'Intelligent lighting, climate, and security control from your phone.' },
    { name: 'Gate Automation',          desc: 'Motorised sliding and swing gates with remote and proximity access.' },
    { name: 'Solar Installation',       desc: 'Off-grid and hybrid solar systems designed for Ghana\'s climate.' },
    { name: 'Access Control',           desc: 'Biometric and card-based entry systems for offices and gated properties.' },
    { name: 'POS Systems',              desc: 'Point-of-sale hardware and software setup for retail and hospitality.' },
    { name: 'Intruder Detection',       desc: 'Motion sensors, glass-break detectors, and siren alert systems.' },
    { name: 'Electrical Wiring',        desc: 'Professional internal wiring, DB boards, and load balancing.' },
    { name: 'General IT Services',      desc: 'Networking, computer repairs, software setup, and tech support.' }
  ],
  products: [
    { name: 'CCTV 4-Camera HD Kit',    price: 'GHS 1,200', category: 'cctv',    desc: '4x 2MP IP cameras, DVR, cables, power supply. Night vision. Remote viewing.' },
    { name: 'CCTV 8-Camera Pro Kit',   price: 'GHS 2,100', category: 'cctv',    desc: '8x 4MP cameras, 8-ch NVR, 2TB HDD. Suitable for large premises.' },
    { name: 'GPS Fleet Tracker',       price: 'GHS 350',   category: 'gps',     desc: 'Real-time tracking with ignition cut-off. Supports iOS & Android.' },
    { name: 'GPS Asset Tracker',       price: 'GHS 180',   category: 'gps',     desc: 'Compact waterproof tracker. 30-day battery. Magnetic mount.' },
    { name: 'Electric Fence Kit 100m', price: 'GHS 950',   category: 'fence',   desc: 'Energiser, 100m barbed wire, insulators, siren, warning signs included.' },
    { name: 'Solar Inverter 2KVA',     price: 'GHS 1,400', category: 'solar',   desc: 'Pure sine wave inverter with built-in MPPT charger. 24V system.' },
    { name: 'Smart Door Lock',         price: 'GHS 520',   category: 'smart',   desc: 'Fingerprint + PIN + card + key. Anti-tamper alarm. Remote unlock via app.' },
    { name: 'Network Switch 24-Port',  price: 'GHS 480',   category: 'it',      desc: 'Managed Gigabit switch for SME networks. Rack-mountable. PoE ready.' },
    { name: 'Wireless Access Point',   price: 'GHS 260',   category: 'it',      desc: 'Dual-band AC1200 ceiling mount AP. PoE powered. Easy cloud management.' }
  ],
  training: {
    t1: { duration: '3 Days', fee: 'GHS 500', desc: 'Hands-on GPS tracker installation, configuration, and platform management. Covers vehicle fitting, SIM setup, and live tracking dashboards.' },
    t2: { duration: '5 Days', fee: 'GHS 600', desc: 'Full electric fence design, installation, and maintenance course. Covers energisers, earth staking, wiring, alarming, and safety standards.' }
  },
  faq: [
    { q: 'What services does BESITS offer?',              a: 'BESITS offers CCTV installation, electric fencing, GPS tracking, smart home automation, gate automation, solar systems, access control, POS systems, intruder detection, electrical wiring, and general IT services — plus certified training programs.' },
    { q: 'Where are you located?',                        a: 'We are based in Afienya, Greater Accra Region, Ghana. We serve clients across Accra and surrounding areas. For large projects, we can travel further — contact us to discuss.' },
    { q: 'What are your business hours?',                 a: 'Monday to Friday: 8:00 AM – 6:00 PM. Saturday: 9:00 AM – 3:00 PM. Closed on Sundays. For urgent matters, reach us via WhatsApp at +233 243 543 893.' },
    { q: 'Do you provide installation after purchase?',   a: 'Yes. All products come with optional professional installation by our certified technicians. We configure, test, and demonstrate everything before leaving your premises.' },
    { q: 'Do you offer support after installation?',      a: 'Yes, we provide after-sales support including remote troubleshooting, on-site repairs, software updates, and system health checks.' },
    { q: 'How long does a typical installation take?',    a: 'A 4-camera CCTV setup typically takes 4–6 hours. Electric fence installations or larger commercial systems may require 1–2 days.' },
    { q: 'Do you sell security equipment directly?',      a: 'Yes. We sell CCTV kits, GPS trackers, electric fence components, access control devices, solar accessories, and IT accessories. Visit our Shop page.' },
    { q: 'Can I get a product demonstration before buying?', a: 'Absolutely. Visit our Afienya office for a hands-on demo. Call ahead to arrange a convenient time.' },
    { q: 'How do I register for training?',               a: 'Visit our Training page and fill out the registration form. You can also call +233 243 543 893 or email support@berntecho.com.' },
    { q: 'Is a certificate issued after training?',       a: 'Yes. Upon successful completion of any BESITS training program, participants receive a certificate of completion demonstrating their practical skills.' },
    { q: 'Do I need prior experience to join?',           a: 'No prior experience required. A basic interest in electronics or IT is helpful but not mandatory. Our trainers start from fundamentals.' }
  ],
  contact: {
    phone:    '+233 243 543 893',
    email:    'support@berntecho.com',
    address:  'Afienya, Greater Accra, Ghana',
    hoursWk:  '8:00 AM – 6:00 PM',
    hoursSat: '9:00 AM – 3:00 PM'
  },
  social: {
    facebook:  'https://web.facebook.com/Berntechco/',
    instagram: '#',
    whatsapp:  '233243543893',
    linkedin:  '#'
  }
};

/* ── Storage helpers ─────────────────────────────────────────── */
function getContent() {
  try {
    const raw = localStorage.getItem('besits_content');
    return raw ? JSON.parse(raw) : DEFAULT_CONTENT;
  } catch (e) {
    return DEFAULT_CONTENT;
  }
}

function saveContent(data) {
  localStorage.setItem('besits_content', JSON.stringify(data));
}

function getAdminPwd() {
  return localStorage.getItem('besits_admin_pwd') || 'besits2024';
}

/* ── DOM refs ────────────────────────────────────────────────── */
const loginScreen  = document.getElementById('login-screen');
const app          = document.getElementById('app');
const loginPass    = document.getElementById('login-pass');
const loginBtn     = document.getElementById('login-btn');
const loginError   = document.getElementById('login-error');
const btnPublish   = document.getElementById('btn-publish');
const btnLogout    = document.getElementById('btn-logout');
const topbarTitle  = document.getElementById('topbar-title');
const toast        = document.getElementById('toast');
const toastMsg     = document.getElementById('toast-msg');

/* ── Panel map (title labels) ────────────────────────────────── */
const PANEL_TITLES = {
  dashboard:   'Dashboard',
  hero:        'Hero Section',
  about:       'About',
  services:    'Services',
  products:    'Products / Shop',
  training:    'Training Programs',
  faq:         'FAQ',
  contact:     'Contact Info',
  submissions: 'Submissions',
  settings:    'Settings'
};

/* ── Toast ───────────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg = 'Changes published!', success = true) {
  toastMsg.textContent = msg;
  toast.querySelector('i').className = success ? 'fas fa-circle-check' : 'fas fa-circle-xmark';
  toast.querySelector('i').style.color = success ? 'var(--success)' : 'var(--danger)';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── Login ───────────────────────────────────────────────────── */
async function attemptLogin() {
  const val = loginPass.value.trim();
  if (val === getAdminPwd()) {
    loginError.classList.remove('show');
    loginScreen.style.display = 'none';
    app.classList.add('show');
    loginPass.value = '';
    // Try to merge cloud content before loading fields
    try {
      if (typeof loadContentFromCloud === 'function') {
        const cloud = await loadContentFromCloud();
        if (cloud) localStorage.setItem('besits_content', JSON.stringify(cloud));
      }
    } catch (_) {}
    loadAllFields();
    loadDashStats();
  } else {
    loginError.classList.add('show');
    loginPass.select();
  }
}

loginBtn.addEventListener('click', attemptLogin);
loginPass.addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

/* ── Logout ──────────────────────────────────────────────────── */
btnLogout.addEventListener('click', () => {
  app.classList.remove('show');
  loginScreen.style.display = '';
  loginPass.value = '';
  loginError.classList.remove('show');
});

/* ── Panel navigation ────────────────────────────────────────── */
function switchPanel(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.snav-item').forEach(n => n.classList.remove('active'));

  const panel = document.getElementById('panel-' + panelId);
  if (panel) panel.classList.add('active');

  const navItem = document.querySelector(`.snav-item[data-panel="${panelId}"]`);
  if (navItem) navItem.classList.add('active');

  topbarTitle.textContent = PANEL_TITLES[panelId] || panelId;
  document.querySelector('.content-area').scrollTop = 0;
}

document.querySelectorAll('[data-panel]').forEach(el => {
  el.addEventListener('click', () => switchPanel(el.dataset.panel));
});

/* ── List Editor helpers ─────────────────────────────────────── */

// Services list
function renderServicesList(services) {
  const container = document.getElementById('services-list');
  container.innerHTML = '';
  services.forEach((svc, i) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="list-item-fields">
        <input type="text" placeholder="Service name" value="${esc(svc.name)}" data-svc-name="${i}" />
        <textarea placeholder="Short description…" data-svc-desc="${i}">${esc(svc.desc)}</textarea>
      </div>
      <button class="btn-remove-item" data-remove-svc="${i}" title="Remove"><i class="fas fa-xmark"></i></button>`;
    container.appendChild(item);
  });
  // Remove listeners
  container.querySelectorAll('[data-remove-svc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.removeSvc;
      const svcs = readServicesList();
      svcs.splice(idx, 1);
      renderServicesList(svcs);
      updateDashStat();
    });
  });
}

function readServicesList() {
  const names = document.querySelectorAll('[data-svc-name]');
  const descs = document.querySelectorAll('[data-svc-desc]');
  const arr = [];
  names.forEach((el, i) => arr.push({ name: el.value, desc: descs[i].value }));
  return arr;
}

document.getElementById('add-service').addEventListener('click', () => {
  const svcs = readServicesList();
  svcs.push({ name: '', desc: '' });
  renderServicesList(svcs);
  // Focus last name input
  const inputs = document.querySelectorAll('[data-svc-name]');
  if (inputs.length) inputs[inputs.length - 1].focus();
});

// Products list
function renderProductsList(products) {
  const container = document.getElementById('products-list');
  container.innerHTML = '';
  products.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="list-item-fields">
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
          <input type="text" placeholder="Product name" value="${esc(p.name)}" data-prod-name="${i}" />
          <input type="text" placeholder="Price (e.g. GHS 350)" value="${esc(p.price)}" data-prod-price="${i}" />
          <select data-prod-cat="${i}" style="background:var(--glass);border:1px solid var(--border);border-radius:8px;padding:9px 13px;font-size:13.5px;color:var(--text);outline:none;font-family:inherit">
            <option value="cctv"  ${p.category==='cctv'  ?'selected':''}>CCTV</option>
            <option value="gps"   ${p.category==='gps'   ?'selected':''}>GPS</option>
            <option value="fence" ${p.category==='fence' ?'selected':''}>Electric Fence</option>
            <option value="solar" ${p.category==='solar' ?'selected':''}>Solar</option>
            <option value="smart" ${p.category==='smart' ?'selected':''}>Smart Home</option>
            <option value="it"    ${p.category==='it'    ?'selected':''}>IT</option>
          </select>
        </div>
        <textarea placeholder="Product description…" data-prod-desc="${i}">${esc(p.desc)}</textarea>
      </div>
      <button class="btn-remove-item" data-remove-prod="${i}" title="Remove"><i class="fas fa-xmark"></i></button>`;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-remove-prod]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.removeProd;
      const prods = readProductsList();
      prods.splice(idx, 1);
      renderProductsList(prods);
      updateDashStat();
    });
  });
}

function readProductsList() {
  const names  = document.querySelectorAll('[data-prod-name]');
  const prices = document.querySelectorAll('[data-prod-price]');
  const cats   = document.querySelectorAll('[data-prod-cat]');
  const descs  = document.querySelectorAll('[data-prod-desc]');
  const arr = [];
  names.forEach((el, i) => arr.push({
    name: el.value, price: prices[i].value,
    category: cats[i].value, desc: descs[i].value
  }));
  return arr;
}

document.getElementById('add-product').addEventListener('click', () => {
  const prods = readProductsList();
  prods.push({ name: '', price: '', category: 'cctv', desc: '' });
  renderProductsList(prods);
  const inputs = document.querySelectorAll('[data-prod-name]');
  if (inputs.length) inputs[inputs.length - 1].focus();
});

// FAQ list
function renderFaqList(faqs) {
  const container = document.getElementById('faq-list');
  container.innerHTML = '';
  faqs.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div class="list-item-fields">
        <input type="text" placeholder="Question" value="${esc(f.q)}" data-faq-q="${i}" />
        <textarea placeholder="Answer…" data-faq-a="${i}">${esc(f.a)}</textarea>
      </div>
      <button class="btn-remove-item" data-remove-faq="${i}" title="Remove"><i class="fas fa-xmark"></i></button>`;
    container.appendChild(item);
  });
  container.querySelectorAll('[data-remove-faq]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.removeFaq;
      const faqs = readFaqList();
      faqs.splice(idx, 1);
      renderFaqList(faqs);
      updateDashStat();
    });
  });
}

function readFaqList() {
  const qs = document.querySelectorAll('[data-faq-q]');
  const as = document.querySelectorAll('[data-faq-a]');
  const arr = [];
  qs.forEach((el, i) => arr.push({ q: el.value, a: as[i].value }));
  return arr;
}

document.getElementById('add-faq').addEventListener('click', () => {
  const faqs = readFaqList();
  faqs.push({ q: '', a: '' });
  renderFaqList(faqs);
  const inputs = document.querySelectorAll('[data-faq-q]');
  if (inputs.length) inputs[inputs.length - 1].focus();
});

/* ── Load all fields from content ────────────────────────────── */
function loadAllFields() {
  const c = getContent();

  // Hero
  v('hero-badge',    c.hero?.badge    ?? DEFAULT_CONTENT.hero.badge);
  v('hero-h1',       c.hero?.h1       ?? DEFAULT_CONTENT.hero.h1);
  v('hero-h3',       c.hero?.h3       ?? DEFAULT_CONTENT.hero.h3);
  v('hero-sub',      c.hero?.sub      ?? DEFAULT_CONTENT.hero.sub);
  const wordsArr = c.hero?.words ?? DEFAULT_CONTENT.hero.words;
  v('hero-words', Array.isArray(wordsArr) ? wordsArr.join('\n') : wordsArr);
  v('hero-cta1-text',c.hero?.cta1Text ?? DEFAULT_CONTENT.hero.cta1Text);
  v('hero-cta1-href',c.hero?.cta1Href ?? DEFAULT_CONTENT.hero.cta1Href);
  v('hero-cta2-text',c.hero?.cta2Text ?? DEFAULT_CONTENT.hero.cta2Text);
  v('hero-cta2-href',c.hero?.cta2Href ?? DEFAULT_CONTENT.hero.cta2Href);

  // About
  v('about-tag',         c.about?.tag         ?? DEFAULT_CONTENT.about.tag);
  v('about-headline',    c.about?.headline     ?? DEFAULT_CONTENT.about.headline);
  v('about-desc',        c.about?.desc         ?? DEFAULT_CONTENT.about.desc);
  v('about-year',        c.about?.year         ?? DEFAULT_CONTENT.about.year);
  v('about-badge-label', c.about?.badgeLabel   ?? DEFAULT_CONTENT.about.badgeLabel);
  v('about-mission',     c.about?.mission      ?? DEFAULT_CONTENT.about.mission);
  v('about-vision',      c.about?.vision       ?? DEFAULT_CONTENT.about.vision);

  // Services
  renderServicesList(c.services ?? DEFAULT_CONTENT.services);

  // Products
  renderProductsList(c.products ?? DEFAULT_CONTENT.products);

  // Training
  const t = c.training ?? DEFAULT_CONTENT.training;
  v('t1-duration', t.t1?.duration ?? DEFAULT_CONTENT.training.t1.duration);
  v('t1-fee',      t.t1?.fee      ?? DEFAULT_CONTENT.training.t1.fee);
  v('t1-desc',     t.t1?.desc     ?? DEFAULT_CONTENT.training.t1.desc);
  v('t2-duration', t.t2?.duration ?? DEFAULT_CONTENT.training.t2.duration);
  v('t2-fee',      t.t2?.fee      ?? DEFAULT_CONTENT.training.t2.fee);
  v('t2-desc',     t.t2?.desc     ?? DEFAULT_CONTENT.training.t2.desc);

  // FAQ
  renderFaqList(c.faq ?? DEFAULT_CONTENT.faq);

  // Contact
  const ct = c.contact ?? DEFAULT_CONTENT.contact;
  v('contact-phone',    ct.phone    ?? DEFAULT_CONTENT.contact.phone);
  v('contact-email',    ct.email    ?? DEFAULT_CONTENT.contact.email);
  v('contact-address',  ct.address  ?? DEFAULT_CONTENT.contact.address);
  v('contact-hours-wk', ct.hoursWk  ?? DEFAULT_CONTENT.contact.hoursWk);
  v('contact-hours-sat',ct.hoursSat ?? DEFAULT_CONTENT.contact.hoursSat);

  // Social
  const sc = c.social ?? DEFAULT_CONTENT.social;
  v('social-fb', sc.facebook  ?? DEFAULT_CONTENT.social.facebook);
  v('social-ig', sc.instagram ?? DEFAULT_CONTENT.social.instagram);
  v('social-wa', sc.whatsapp  ?? DEFAULT_CONTENT.social.whatsapp);
  v('social-li', sc.linkedin  ?? DEFAULT_CONTENT.social.linkedin);

  updateDashStat();
}

/* ── Collect all field values into content object ────────────── */
function collectContent() {
  return {
    hero: {
      badge:    g('hero-badge'),
      h1:       g('hero-h1'),
      h3:       g('hero-h3'),
      sub:      g('hero-sub'),
      words:    g('hero-words').split('\n').map(s => s.trim()).filter(Boolean),
      cta1Text: g('hero-cta1-text'),
      cta1Href: g('hero-cta1-href'),
      cta2Text: g('hero-cta2-text'),
      cta2Href: g('hero-cta2-href')
    },
    about: {
      tag:        g('about-tag'),
      headline:   g('about-headline'),
      desc:       g('about-desc'),
      year:       g('about-year'),
      badgeLabel: g('about-badge-label'),
      mission:    g('about-mission'),
      vision:     g('about-vision')
    },
    services: readServicesList(),
    products: readProductsList(),
    training: {
      t1: { duration: g('t1-duration'), fee: g('t1-fee'), desc: g('t1-desc') },
      t2: { duration: g('t2-duration'), fee: g('t2-fee'), desc: g('t2-desc') }
    },
    faq: readFaqList(),
    contact: {
      phone:    g('contact-phone'),
      email:    g('contact-email'),
      address:  g('contact-address'),
      hoursWk:  g('contact-hours-wk'),
      hoursSat: g('contact-hours-sat')
    },
    social: {
      facebook:  g('social-fb'),
      instagram: g('social-ig'),
      whatsapp:  g('social-wa'),
      linkedin:  g('social-li')
    }
  };
}

/* ── Publish ─────────────────────────────────────────────────── */
btnPublish.addEventListener('click', async () => {
  const data = collectContent();
  saveContent(data);
  updateDashStat();

  btnPublish.classList.add('saving');
  btnPublish.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving…';
  btnPublish.disabled = true;

  try {
    if (typeof saveContentToCloud === 'function') {
      await saveContentToCloud(data);
    }
    btnPublish.innerHTML = '<i class="fas fa-circle-check"></i> Published!';
    showToast('Changes saved and synced to cloud!');
  } catch (err) {
    console.error('Cloud save error:', err);
    btnPublish.innerHTML = '<i class="fas fa-circle-check"></i> Saved locally';
    showToast('Saved locally (cloud sync failed)', false);
  }

  setTimeout(() => {
    btnPublish.classList.remove('saving');
    btnPublish.innerHTML = '<i class="fas fa-upload"></i> Save &amp; Publish';
    btnPublish.disabled = false;
  }, 2500);
});

/* ── Password change ─────────────────────────────────────────── */
document.getElementById('btn-change-pwd').addEventListener('click', () => {
  const current = document.getElementById('pwd-current').value;
  const next    = document.getElementById('pwd-new').value;
  const confirm = document.getElementById('pwd-confirm').value;
  const msg     = document.getElementById('pwd-msg');

  if (current !== getAdminPwd()) {
    msg.textContent = 'Incorrect current password.';
    msg.style.color = 'var(--danger)';
    return;
  }
  if (next.length < 6) {
    msg.textContent = 'New password must be at least 6 characters.';
    msg.style.color = 'var(--danger)';
    return;
  }
  if (next !== confirm) {
    msg.textContent = 'Passwords do not match.';
    msg.style.color = 'var(--danger)';
    return;
  }
  localStorage.setItem('besits_admin_pwd', next);
  document.getElementById('pwd-current').value = '';
  document.getElementById('pwd-new').value = '';
  document.getElementById('pwd-confirm').value = '';
  msg.textContent = 'Password updated successfully.';
  msg.style.color = 'var(--success)';
  showToast('Password updated!');
  setTimeout(() => { msg.textContent = ''; }, 4000);
});

/* ── Reset to defaults ───────────────────────────────────────── */
document.getElementById('btn-reset').addEventListener('click', async () => {
  if (!confirm('Reset all site content to defaults? This cannot be undone.')) return;
  localStorage.removeItem('besits_content');
  try {
    if (typeof saveContentToCloud === 'function') {
      await saveContentToCloud(DEFAULT_CONTENT);
    }
  } catch (_) {}
  loadAllFields();
  showToast('Content reset to defaults.');
});

/* ── Dashboard stat counts ───────────────────────────────────── */
function updateDashStat() {
  const c = collectContent();
  const statProd = document.getElementById('stat-products');
  const statFaq  = document.getElementById('stat-faq');
  if (statProd) statProd.textContent = c.products.length;
  if (statFaq)  statFaq.textContent  = c.faq.length;
}

/* ── Utility: get / set field value ─────────────────────────── */
function g(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}
function v(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val ?? '';
}
function esc(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* ── Dashboard live stats (submissions count) ─────────────────── */
async function loadDashStats() {
  const banner = document.getElementById('db-setup-banner');
  try {
    const [contacts, trainings, newsletters] = await Promise.all([
      typeof getContactSubmissions    === 'function' ? getContactSubmissions()    : [],
      typeof getTrainingRegistrations === 'function' ? getTrainingRegistrations() : [],
      typeof getNewsletterSignups     === 'function' ? getNewsletterSignups()     : []
    ]);
    if (banner) banner.style.display = 'none';
    const newMsgs = contacts.filter(r => r.status === 'new').length;
    const el = document.getElementById('stat-submissions');
    if (el) el.textContent = contacts.length + trainings.length;
    const elNl = document.getElementById('stat-newsletter');
    if (elNl) elNl.textContent = newsletters.length;
    const elNew = document.getElementById('stat-new-msgs');
    if (elNew) elNew.textContent = newMsgs;
  } catch (err) {
    if (banner && err.message && err.message.includes('schema cache')) {
      banner.style.display = 'block';
    }
  }
}

/* ── Submissions Panel ───────────────────────────────────────── */
let subsTab = 'contact';

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }) +
    ' ' + d.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });
}

function statusBadge(s) {
  const map = {
    new:'#e8591a', read:'#3b82f6', replied:'#10b981',
    pending:'#f59e0b', confirmed:'#3b82f6', completed:'#10b981',
    subscribed:'#10b981', unsubscribed:'#6b7280'
  };
  return `<span style="background:${map[s]||'#666'};color:#fff;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;text-transform:uppercase">${s}</span>`;
}

async function loadSubmissionsPanel() {
  const wrap = document.getElementById('subs-content');
  if (!wrap) return;
  wrap.innerHTML = '<p style="color:rgba(255,255,255,0.4);padding:24px">Loading…</p>';

  try {
    let rows = [];
    let html = '';

    if (subsTab === 'contact') {
      rows = typeof getContactSubmissions === 'function' ? await getContactSubmissions() : [];
      html = `<table class="subs-table">
        <thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Phone</th><th>Subject</th><th>Message</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${rows.length ? rows.map(r => `
          <tr id="row-${r.id}">
            <td style="white-space:nowrap">${fmtDate(r.created_at)}</td>
            <td>${esc(r.name)}</td>
            <td><a href="mailto:${esc(r.email)}" style="color:var(--orange)">${esc(r.email)}</a></td>
            <td>${esc(r.phone||'—')}</td>
            <td>${esc(r.subject||'—')}</td>
            <td style="max-width:220px;white-space:pre-wrap;word-break:break-word">${esc(r.message)}</td>
            <td>${statusBadge(r.status)}</td>
            <td style="white-space:nowrap">
              ${r.status==='new'?`<button class="subs-btn" onclick="subsMark('contact_submissions','${r.id}','read')">Mark Read</button>`:''}
              ${r.status!=='replied'?`<button class="subs-btn" onclick="subsMark('contact_submissions','${r.id}','replied')">Replied</button>`:''}
              <button class="subs-btn subs-del" onclick="subsDel('contact_submissions','${r.id}')">Delete</button>
            </td>
          </tr>`).join('') : '<tr><td colspan="8" style="text-align:center;color:rgba(255,255,255,0.3);padding:32px">No messages yet.</td></tr>'}</tbody>
      </table>`;

    } else if (subsTab === 'training') {
      rows = typeof getTrainingRegistrations === 'function' ? await getTrainingRegistrations() : [];
      html = `<table class="subs-table">
        <thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Phone</th><th>Program</th><th>Pref. Date</th><th>Message</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${rows.length ? rows.map(r => `
          <tr id="row-${r.id}">
            <td style="white-space:nowrap">${fmtDate(r.created_at)}</td>
            <td>${esc(r.name)}</td>
            <td><a href="mailto:${esc(r.email)}" style="color:var(--orange)">${esc(r.email)}</a></td>
            <td>${esc(r.phone||'—')}</td>
            <td><strong>${r.program==='gps'?'GPS Tracking':'Electric Fencing'}</strong></td>
            <td>${r.preferred_date||'—'}</td>
            <td style="max-width:160px;white-space:pre-wrap;word-break:break-word">${esc(r.message||'—')}</td>
            <td>${statusBadge(r.status)}</td>
            <td style="white-space:nowrap">
              ${r.status==='pending'?`<button class="subs-btn" onclick="subsMark('training_registrations','${r.id}','confirmed')">Confirm</button>`:''}
              ${r.status==='confirmed'?`<button class="subs-btn" onclick="subsMark('training_registrations','${r.id}','completed')">Complete</button>`:''}
              <button class="subs-btn subs-del" onclick="subsDel('training_registrations','${r.id}')">Delete</button>
            </td>
          </tr>`).join('') : '<tr><td colspan="9" style="text-align:center;color:rgba(255,255,255,0.3);padding:32px">No registrations yet.</td></tr>'}</tbody>
      </table>`;

    } else {
      rows = typeof getNewsletterSignups === 'function' ? await getNewsletterSignups() : [];
      html = `<table class="subs-table">
        <thead><tr><th>Date</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${rows.length ? rows.map(r => `
          <tr id="row-${r.id}">
            <td style="white-space:nowrap">${fmtDate(r.created_at)}</td>
            <td>${esc(r.email)}</td>
            <td>${statusBadge(r.status)}</td>
            <td><button class="subs-btn subs-del" onclick="subsDel('newsletter_signups','${r.id}')">Remove</button></td>
          </tr>`).join('') : '<tr><td colspan="4" style="text-align:center;color:rgba(255,255,255,0.3);padding:32px">No subscribers yet.</td></tr>'}</tbody>
      </table>`;
    }

    wrap.innerHTML = html;
  } catch (err) {
    wrap.innerHTML = `<p style="color:#ef4444;padding:24px">Error loading submissions: ${err.message}</p>`;
  }
}

async function subsMark(table, id, status) {
  try {
    await markStatus(table, id, status);
    loadSubmissionsPanel();
    loadDashStats();
  } catch (err) { alert('Update failed: ' + err.message); }
}

async function subsDel(table, id) {
  if (!confirm('Delete this record permanently?')) return;
  try {
    await deleteRecord(table, id);
    const row = document.getElementById('row-' + id);
    if (row) row.remove();
    loadDashStats();
  } catch (err) { alert('Delete failed: ' + err.message); }
}

// Submissions tab switcher
document.addEventListener('click', e => {
  const tab = e.target.closest('[data-subs-tab]');
  if (!tab) return;
  subsTab = tab.dataset.subsTab;
  document.querySelectorAll('[data-subs-tab]').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  loadSubmissionsPanel();
});

// Hook submissions/dashboard loading into existing panel navigation
document.querySelectorAll('[data-panel]').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.panel;
    if (id === 'submissions') loadSubmissionsPanel();
    if (id === 'dashboard')   loadDashStats();
  });
});
