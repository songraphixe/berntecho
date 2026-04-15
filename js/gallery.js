/**
 * gallery.js — BESITS Gallery page interactivity
 * Loads gallery items from Supabase; falls back to hardcoded defaults.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     Default items (fallback when DB is empty)
  ───────────────────────────────────────── */
  const DEFAULT_IMAGES = [
    { type:'image', src:'MEDIA/work pics/128416.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128417.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128418.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128420.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128421.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128422.jpg', cat:'cctv',     alt:'CCTV installation' },
    { type:'image', src:'MEDIA/work pics/128423.jpg', cat:'fence',    alt:'Electric fencing' },
    { type:'image', src:'MEDIA/work pics/128425.jpg', cat:'fence',    alt:'Electric fencing' },
    { type:'image', src:'MEDIA/work pics/128463.jpg', cat:'fence',    alt:'Electric fencing' },
    { type:'image', src:'MEDIA/work pics/128465.jpg', cat:'fence',    alt:'Electric fencing' },
    { type:'image', src:'MEDIA/work pics/128498.jpg', cat:'training', alt:'Training session' },
    { type:'image', src:'MEDIA/work pics/128506.jpg', cat:'training', alt:'Training session' },
    { type:'image', src:'MEDIA/work pics/128510.jpg', cat:'training', alt:'Training session' },
    { type:'image', src:'MEDIA/work pics/128516.jpg', cat:'training', alt:'Training session' },
    { type:'image', src:'MEDIA/work pics/128517.jpg', cat:'events',   alt:'Company event' },
    { type:'image', src:'MEDIA/work pics/128518.jpg', cat:'events',   alt:'Company event' },
    { type:'image', src:'MEDIA/work pics/128519.jpg', cat:'events',   alt:'Company event' },
    { type:'image', src:'MEDIA/work pics/128530.jpg', cat:'events',   alt:'Company event' },
    { type:'image', src:'MEDIA/work pics/IMG_20260327_193521_329.jpg', cat:'events', alt:'Company event' },
    { type:'image', src:'MEDIA/work pics/IMG_20260327_193549_846.jpg', cat:'events', alt:'Company event' },
  ];

  const DEFAULT_VIDEOS = [
    '69d657b279cd218090e1f7c3',
    '69d657b2e2653946cb192587',
    '69d657b2e2653946cb192599',
    '69d657b215722ddd1388df9a',
    '69d657b315722ddd1388dfb8',
    '69d657b2e2653946cb19259b',
    '69d657b3e2653946cb1925bc',
    '69d657b3e2653946cb1925c1',
    '69d657cbe2653946cb19282b',
  ];

  /* ─────────────────────────────────────────
     State
  ───────────────────────────────────────── */
  let items = []; // flat list used by lightbox
  let activeFilter = 'all';

  /* ─────────────────────────────────────────
     Gallery grid elements (static in HTML)
  ───────────────────────────────────────── */
  const galleryGrid  = document.querySelector('.gallery-grid');
  const videoGrid    = document.querySelector('.video-grid');
  const lightbox     = document.getElementById('lightbox');
  const lbMedia      = document.getElementById('lb-media');
  const lbClose      = document.getElementById('lb-close');
  const lbPrev       = document.getElementById('lb-prev');
  const lbNext       = document.getElementById('lb-next');

  let currentIndex  = 0;
  let currentPool   = [];

  /* ─────────────────────────────────────────
     Lightbox helpers
  ───────────────────────────────────────── */
  function buildPool() {
    if (activeFilter === 'all') {
      currentPool = [...items];
    } else if (activeFilter === 'video') {
      currentPool = items.filter(i => i.type === 'video');
    } else {
      currentPool = items.filter(i => i.type === 'image' && i.cat === activeFilter);
    }
  }

  function renderLbMedia(item) {
    lbMedia.innerHTML = '';
    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      lbMedia.appendChild(img);
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = `https://play.gumlet.io/embed/${item.gid}?autoplay=true`;
      iframe.allow = 'autoplay; encrypted-media; fullscreen';
      iframe.style.cssText = 'width:min(90vw,960px);aspect-ratio:16/9;border:none;border-radius:12px;display:block;';
      lbMedia.appendChild(iframe);
    }
  }

  function openLightbox(index) {
    buildPool();
    currentIndex = index;
    renderLbMedia(currentPool[currentIndex]);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const iframe = lbMedia.querySelector('iframe');
    if (iframe) iframe.src = '';
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    const iframe = lbMedia.querySelector('iframe');
    if (iframe) iframe.src = '';
    currentIndex = (currentIndex - 1 + currentPool.length) % currentPool.length;
    renderLbMedia(currentPool[currentIndex]);
  }

  function showNext() {
    const iframe = lbMedia.querySelector('iframe');
    if (iframe) iframe.src = '';
    currentIndex = (currentIndex + 1) % currentPool.length;
    renderLbMedia(currentPool[currentIndex]);
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', showPrev);
  if (lbNext)  lbNext.addEventListener('click', showNext);
  if (lightbox) {
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener('keydown', e => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  /* ─────────────────────────────────────────
     Render the gallery from items[]
  ───────────────────────────────────────── */
  function renderGallery() {
    if (!galleryGrid) return;

    const imgItems = items.filter(i => i.type === 'image');
    const vidItems = items.filter(i => i.type === 'video');

    // Image grid
    galleryGrid.innerHTML = imgItems.map((item, idx) => `
      <div class="gallery-item reveal" data-gcat="${item.cat}" data-idx="${idx}" style="cursor:pointer">
        <img src="${item.src}" alt="${item.alt || ''}" loading="lazy"
          onerror="this.closest('.gallery-item').style.display='none'" />
      </div>`).join('');

    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.classList.add('visible');
      el.addEventListener('click', () => {
        buildPool();
        const src = el.querySelector('img').src;
        const idx = currentPool.findIndex(p => p.type === 'image' && el.querySelector('img').getAttribute('src') === p.src);
        openLightbox(idx >= 0 ? idx : 0);
      });
    });

    // Video grid
    if (videoGrid) {
      videoGrid.innerHTML = vidItems.map((item, i) => `
        <div class="vid-card reveal" data-vidx="${i}" data-gid="${item.gid}" style="cursor:pointer">
          <img class="vid-thumb"
               src="https://video.gumlet.io/${item.gid}/thumbnail-1-0.png"
               alt="${item.cat || 'Video'}"
               onerror="this.style.background='#111';this.style.minHeight='100%'" />
          <div class="vid-play-btn">
            <i class="fas fa-play"></i>
          </div>
          <span style="position:absolute;bottom:10px;left:12px;font-size:11px;color:#fff;font-weight:600;text-transform:uppercase;letter-spacing:.06em;z-index:3;pointer-events:none">${item.cat || 'Video'}</span>
          <iframe class="vid-hover-player"
                  src=""
                  data-src="https://play.gumlet.io/embed/${item.gid}?autoplay=1&muted=1&loop=1&disable_player_controls=1&background=1"
                  allow="autoplay; encrypted-media"
                  style="position:absolute;inset:0;width:100%;height:100%;border:none;opacity:0;transition:opacity 0.4s;pointer-events:none;z-index:2">
          </iframe>
        </div>`).join('');

      videoGrid.querySelectorAll('.vid-card').forEach((card, i) => {
        card.classList.add('visible');

        const iframe  = card.querySelector('.vid-hover-player');
        const playBtn = card.querySelector('.vid-play-btn');

        card.addEventListener('mouseenter', () => {
          if (iframe) {
            if (!iframe.src || iframe.src === window.location.href) {
              iframe.src = iframe.dataset.src; // lazy-load on first hover
            }
            iframe.style.opacity = '1';
          }
          if (playBtn) playBtn.style.opacity = '0';
        });

        card.addEventListener('mouseleave', () => {
          if (iframe) iframe.style.opacity = '0';
          if (playBtn) playBtn.style.opacity = '1';
        });

        card.addEventListener('click', () => {
          if (iframe) iframe.style.opacity = '0'; // hide hover player before lightbox opens
          const imgCount = items.filter(it => it.type === 'image').length;
          openLightbox(imgCount + i);
        });
      });
    }

    applyFilter(activeFilter);
  }

  /* ─────────────────────────────────────────
     Filter tabs
  ───────────────────────────────────────── */
  function applyFilter(filter) {
    activeFilter = filter;
    if (!galleryGrid) return;

    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      const show = filter === 'all' || item.dataset.gcat === filter;
      item.style.display = show ? '' : 'none';
    });

    if (videoGrid) {
      const showVid = filter === 'all' || filter === 'video';
      videoGrid.querySelectorAll('.vid-card').forEach(c => { c.style.display = showVid ? '' : 'none'; });
    }
  }

  document.querySelectorAll('.gtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      applyFilter(tab.dataset.filter);
    });
  });

  /* ─────────────────────────────────────────
     Load from Supabase → merge → render
  ───────────────────────────────────────── */
  async function loadGallery() {
    let dbImages = [], dbVideos = [];

    try {
      if (typeof getGalleryItems === 'function') {
        const dbItems = await getGalleryItems();
        if (dbItems && dbItems.length > 0) {
          dbImages = dbItems
            .filter(i => i.type === 'image')
            .map(i => ({ type:'image', src:i.url, cat:i.category || 'general', alt:i.alt || '' }));
          dbVideos = dbItems
            .filter(i => i.type === 'video')
            .map(i => ({ type:'video', gid:i.gumlet_id, cat:i.category || 'general' }));
        }
      }
    } catch(e) {
      console.warn('[Gallery] Supabase load failed, using defaults:', e.message);
    }

    // Always merge DB items with local defaults so the gallery never goes blank.
    // DB items (if any) appear first; local defaults fill in the rest.
    const defaultVideoItems = DEFAULT_VIDEOS.map(gid => ({ type:'video', gid, cat:'general' }));
    items = [
      ...dbImages,
      ...DEFAULT_IMAGES,
      ...dbVideos,
      ...defaultVideoItems
    ];
    renderGallery();
  }

  // Wait for db.js to initialise then load
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadGallery, 200);
  });

})();
