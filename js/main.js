/* ================================================================
   BESITS — Main JavaScript
   Ultra-Modern Interactions & Animations
   ================================================================ */

(function () {
  'use strict';

  /* ── Supabase client (inline — avoids cross-file scope issues) ── */
  const SUPA_URL = 'https://irsywbqghfrfdashnpqz.supabase.co';
  const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3l3YnFnaGZyZmRhc2hucHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNjE3ODQsImV4cCI6MjA5MDYzNzc4NH0.0j6CMv95ZaKh84ro4R7tqPTiaPhB4jb4i-F4io3W1Gw';
  let _db = null;
  try {
    if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
      _db = window.supabase.createClient(SUPA_URL, SUPA_KEY);
    }
  } catch (_) {}

  function _dbReady() {
    if (!_db) throw new Error('Database not available. Check your internet connection and refresh.');
    return _db;
  }

  async function _submitContactForm(data) {
    const { error } = await _dbReady().from('contact_submissions').insert({
      name: data.name || null, phone: data.phone || null,
      email: data.email || null, subject: data.subject || null, message: data.message || null
    });
    if (error) throw error;
  }

  async function _submitTrainingForm(data) {
    const { error } = await _dbReady().from('training_registrations').insert({
      name: data.name || null, phone: data.phone || null,
      email: data.email || null, program: data.program || null,
      preferred_date: data.date || null, message: data.message || null
    });
    if (error) throw error;
  }

  async function _subscribeNewsletter(email) {
    const { error } = await _dbReady()
      .from('newsletter_signups')
      .upsert({ email: email.toLowerCase().trim(), status: 'subscribed' }, { onConflict: 'email' });
    if (error) throw error;
  }

  async function _loadContentFromCloud() {
    const { data, error } = await _dbReady()
      .from('site_content').select('content').eq('id', 1).maybeSingle();
    if (error || !data) return null;
    return data.content || null;
  }

  /* ── Default site content (CMS fallback) ───────────────────── */
  const DEFAULT_CONTENT = {
    hero: {
      badge: "Ghana's #1 Security Company",
      h1: "We Secure & Power",
      words: ["CCTV Systems", "Smart Homes", "GPS Tracking", "Solar Power", "IT Networks"],
      h3: "Across Ghana.",
      sub: "Professional security installations, IT solutions, and certified training — trusted by 500+ homes and businesses since 2017.",
      cta1Text: "Explore Services", cta1Href: "services.html",
      cta2Text: "Get a Quote",      cta2Href: "contact.html",
    },
    contact: {
      phone: "+233 243 543 893",
      email: "support@berntecho.com",
      address: "Afienya, Greater Accra, Ghana",
      hoursWk: "8:00 AM – 6:00 PM",
      hoursSat: "9:00 AM – 3:00 PM",
    },
    social: { facebook:"https://web.facebook.com/Berntechco/", instagram:"#", whatsapp:"233243543893", linkedin:"#" },
    about: {
      year: "2017", badgeLabel: "Founded in Ghana",
      headline: "Ghana's Trusted Security & IT Partner Since 2017",
      desc: "BESITS — Berntecho Electronic Security & IT Solutions — was founded with a simple but powerful goal: to make world-class security and IT accessible for every Ghanaian home and business.",
      mission: "To provide accessible, world-class security and IT solutions that protect lives, assets, and businesses across Ghana — delivered with integrity, professionalism, and genuine care.",
      vision: "To become West Africa's most trusted security and technology company — reducing crime, preventing losses, and building digital confidence across the region.",
    },
  };

  function getContent() {
    try {
      const stored = localStorage.getItem('besits_content');
      if (!stored) return DEFAULT_CONTENT;
      const parsed = JSON.parse(stored);
      return {
        hero:    { ...DEFAULT_CONTENT.hero,    ...(parsed.hero    || {}) },
        contact: { ...DEFAULT_CONTENT.contact, ...(parsed.contact || {}) },
        social:  { ...DEFAULT_CONTENT.social,  ...(parsed.social  || {}) },
        about:   { ...(DEFAULT_CONTENT.about  || {}), ...(parsed.about  || {}) },
      };
    } catch { return DEFAULT_CONTENT; }
  }

  /* ── DOM-ready init ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    applyContentFromCloud();
    initScrollProgress();
    initNavbar();
    initMobileMenu();
    initHeroCanvas();
    initTypewriter();
    initScrollReveal();
    initCardTilt();
    initCounters();
    initFAQ();
    initShopTabs();
    initForms();
    initNewsletter();
    initFloatBtns();
    updateActiveNav();
  });

  /* ── Apply CMS content (tries Supabase first, falls back to localStorage) ── */
  async function applyContentFromCloud() {
    let cloudContent = null;
    try {
      cloudContent = await _loadContentFromCloud();
    } catch (_) {}
    if (cloudContent) {
      try { localStorage.setItem('besits_content', JSON.stringify(cloudContent)); } catch (_) {}
    }
    applyContent();
  }

  /* ── Apply CMS content ──────────────────────────────────────── */
  function applyContent() {
    const c = getContent();
    // Hero cycling words
    const hw = document.querySelector('.cycle-word-text');
    if (hw) hw.dataset.words = JSON.stringify(c.hero.words);

    // Contact info (everywhere)
    document.querySelectorAll('[data-cms-phone]').forEach(el => { el.textContent = c.contact.phone; el.href = 'tel:' + c.contact.phone.replace(/\s/g,''); });
    document.querySelectorAll('[data-cms-email]').forEach(el => { el.textContent = c.contact.email; el.href = 'mailto:' + c.contact.email; });
    document.querySelectorAll('[data-cms-address]').forEach(el => el.textContent = c.contact.address);

    // Social links
    const waUrl = c.social.whatsapp ? 'https://wa.me/' + c.social.whatsapp.replace(/\D/g,'') : '#';
    document.querySelectorAll('[data-cms-social-wa]').forEach(el => { el.href = waUrl; });
    document.querySelectorAll('[data-cms-social-fb]').forEach(el => { if(c.social.facebook && c.social.facebook !== '#') el.href = c.social.facebook; });
    document.querySelectorAll('[data-cms-social-ig]').forEach(el => { if(c.social.instagram && c.social.instagram !== '#') el.href = c.social.instagram; });
    document.querySelectorAll('[data-cms-social-li]').forEach(el => { if(c.social.linkedin && c.social.linkedin !== '#') el.href = c.social.linkedin; });

    // About fields
    if (c.about) {
      if (c.about.year)        document.querySelectorAll('[data-cms-about-year]').forEach(el => { el.textContent = c.about.year; });
      if (c.about.badgeLabel)  document.querySelectorAll('[data-cms-about-badge-label]').forEach(el => { el.textContent = c.about.badgeLabel; });
      if (c.about.desc)        document.querySelectorAll('[data-cms-about-desc]').forEach(el => { el.textContent = c.about.desc; });
      if (c.about.mission)     document.querySelectorAll('[data-cms-about-mission]').forEach(el => { el.textContent = c.about.mission; });
      if (c.about.vision)      document.querySelectorAll('[data-cms-about-vision]').forEach(el => { el.textContent = c.about.vision; });
      if (c.about.headline)    document.querySelectorAll('[data-cms-about-headline]').forEach(el => { el.textContent = c.about.headline; });
    }

    // Contact hours
    if (c.contact.hoursWk)  document.querySelectorAll('[data-cms-hours-wk]').forEach(el => { el.textContent = c.contact.hoursWk; });
    if (c.contact.hoursSat) document.querySelectorAll('[data-cms-hours-sat]').forEach(el => { el.textContent = c.contact.hoursSat; });
  }

  /* ── Active nav link ────────────────────────────────────────── */
  function updateActiveNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === page);
    });
  }

  /* ── Scroll progress bar ────────────────────────────────────── */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const pct = (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  /* ── Floating back-to-top / scroll-to-bottom ─────────────────── */
  function initFloatBtns() {
    const topBtn = document.getElementById('btn-top');
    const botBtn = document.getElementById('btn-bottom');
    if (!topBtn && !botBtn) return;

    window.addEventListener('scroll', () => {
      const scrolled = scrollY > 500;
      const nearBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 200;
      if (topBtn) topBtn.classList.toggle('visible', scrolled);
      if (botBtn) botBtn.classList.toggle('visible', !nearBottom);
    }, { passive: true });

    topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    botBtn?.addEventListener('click', () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
  }

  /* ── Navbar scroll effect ────────────────────────────────────── */
  function initNavbar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60), { passive: true });
  }

  /* ── Mobile menu ─────────────────────────────────────────────── */
  function initMobileMenu() {
    const burger  = document.querySelector('.hamburger');
    const drawer  = document.querySelector('.mobile-nav');
    const close   = document.querySelector('.mnav-close');
    if (!burger || !drawer) return;

    const open  = () => { burger.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const shut  = () => { burger.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; };

    burger.addEventListener('click', () => drawer.classList.contains('open') ? shut() : open());
    close?.addEventListener('click', shut);
    drawer.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', shut));
    document.addEventListener('click', e => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !burger.contains(e.target)) shut();
    });
  }

  /* ── Hero Canvas — Particle System ──────────────────────────── */
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], raf;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() { this.reset(true); }
      reset(initial) {
        this.x  = Math.random() * W;
        this.y  = initial ? Math.random() * H : H + 10;
        this.r  = Math.random() * 1.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -(Math.random() * 0.5 + 0.1);
        this.alpha = Math.random() * 0.5 + 0.1;
        // Orange or white
        this.color = Math.random() > 0.7
          ? `rgba(232,89,26,${this.alpha})`
          : `rgba(255,255,255,${this.alpha * 0.6})`;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.y < -10) this.reset(false);
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.floor((W * H) / 8000);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(loop);
    }

    resize();
    initParticles();
    loop();

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(canvas);
  }

  /* ── Typewriter / cycling text ──────────────────────────────── */
  function initTypewriter() {
    const el = document.querySelector('.cycle-word-text');
    if (!el) return;

    let words;
    try { words = JSON.parse(el.dataset.words || '[]'); } catch { words = []; }
    if (!words.length) {
      words = ["CCTV Systems","Smart Homes","GPS Tracking","Solar Power","IT Networks"];
    }

    const cursor = document.querySelector('.tw-cursor');
    let wi = 0, ci = 0, deleting = false, paused = false;

    function tick() {
      if (paused) return;
      const word = words[wi];

      if (!deleting) {
        el.textContent = word.slice(0, ci + 1);
        ci++;
        if (ci === word.length) {
          paused = true;
          setTimeout(() => { paused = false; deleting = true; tick(); }, 1800);
          return;
        }
        setTimeout(tick, 80 + Math.random() * 40);
      } else {
        el.textContent = word.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
        }
        setTimeout(tick, 40 + Math.random() * 20);
      }
    }
    setTimeout(tick, 600);
  }

  /* ── Scroll Reveal (IntersectionObserver) ────────────────────── */
  function initScrollReveal() {
    const classes = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const els = document.querySelectorAll(classes.join(','));
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ── 3D Card Tilt ────────────────────────────────────────────── */
  function initCardTilt() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
        card.style.boxShadow = `${-x * 20}px ${-y * 20}px 40px rgba(0,0,0,0.4), 0 0 30px rgba(232,89,26,0.08)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  /* ── Counter animation ──────────────────────────────────────── */
  function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur    = 1800;
        const fps    = 60;
        const steps  = (dur / 1000) * fps;
        let cur      = 0;
        const inc    = target / steps;

        const timer = setInterval(() => {
          cur = Math.min(cur + inc, target);
          el.textContent = Math.floor(cur) + suffix;
          if (cur >= target) clearInterval(timer);
        }, 1000 / fps);

        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
  }

  /* ── FAQ Accordion ──────────────────────────────────────────── */
  function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const item   = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => { if (i !== item) i.classList.remove('open'); });
        item.classList.toggle('open', !isOpen);
      });
    });
  }

  /* ── Shop Category Tabs ─────────────────────────────────────── */
  function initShopTabs() {
    const tabs  = document.querySelectorAll('.cat-tab');
    const cards = document.querySelectorAll('[data-category]');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter || 'all';
        cards.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.style.display = show ? '' : 'none';
          if (show) setTimeout(() => card.classList.add('visible'), 20);
        });
      });
    });
  }

  /* ── Form handling ──────────────────────────────────────────── */
  function initForms() {
    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        let valid = true;

        form.querySelectorAll('[required]').forEach(f => {
          const empty = !f.value.trim();
          f.style.borderColor = empty ? '#ef4444' : '';
          if (empty) valid = false;
        });

        if (!valid) return;

        const btn  = form.querySelector('[type=submit]');
        const orig = btn ? btn.innerHTML : '';
        if (btn) {
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
          btn.disabled  = true;
        }

        const data = Object.fromEntries(new FormData(form).entries());

        try {
          const isTraining = !!form.querySelector('[name="program"]');
          if (isTraining) {
            await _submitTrainingForm(data);
          } else {
            await _submitContactForm(data);
          }

          if (btn) {
            btn.innerHTML = '<i class="fas fa-circle-check"></i> Sent successfully!';
            btn.style.background = '#10b981';
            setTimeout(() => {
              btn.innerHTML = orig;
              btn.style.background = '';
              btn.disabled = false;
              form.reset();
            }, 4000);
          }
        } catch (err) {
          console.error('Submission error:', err);
          const msg = err.message || 'Submission failed';
          if (btn) {
            btn.innerHTML = '<i class="fas fa-circle-xmark"></i> ' + msg;
            btn.style.background = '#ef4444';
            btn.style.fontSize = '13px';
            setTimeout(() => {
              btn.innerHTML = orig;
              btn.style.background = '';
              btn.style.fontSize = '';
              btn.disabled = false;
            }, 5000);
          }
        }
      });
    });
  }

  /* ── Newsletter form ─────────────────────────────────────────── */
  function initNewsletter() {
    document.querySelectorAll('.nl-form').forEach(form => {
      form.removeAttribute('onsubmit');
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn   = form.querySelector('button[type="submit"]');
        if (!input || !input.value.trim()) return;

        const email  = input.value.trim();
        const origBt = btn ? btn.innerHTML : '';
        if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }

        try {
          await _subscribeNewsletter(email);
          input.value = '';
          if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = '#10b981';
            setTimeout(() => {
              btn.innerHTML = origBt;
              btn.style.background = '';
              btn.disabled = false;
            }, 3000);
          }
        } catch (err) {
          console.error('Newsletter error:', err);
          if (btn) {
            btn.innerHTML = '<i class="fas fa-xmark"></i>';
            btn.style.background = '#ef4444';
            setTimeout(() => {
              btn.innerHTML = origBt;
              btn.style.background = '';
              btn.disabled = false;
            }, 3000);
          }
        }
      });
    });
  }

})();
