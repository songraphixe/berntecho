/**
 * gallery.js — BESITS Gallery page interactivity
 * Handles: filter tabs, image/video lightbox, hover-play for video cards
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     1.  Build flat media items array
  ───────────────────────────────────────── */
  const imageFiles = [
    { src: 'MEDIA/work pics/128416.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128417.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128418.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128420.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128421.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128422.jpg',  cat: 'cctv',     alt: 'CCTV installation' },
    { src: 'MEDIA/work pics/128423.jpg',  cat: 'fence',    alt: 'Electric fencing' },
    { src: 'MEDIA/work pics/128425.jpg',  cat: 'fence',    alt: 'Electric fencing' },
    { src: 'MEDIA/work pics/128463.jpg',  cat: 'fence',    alt: 'Electric fencing' },
    { src: 'MEDIA/work pics/128465.jpg',  cat: 'fence',    alt: 'Electric fencing' },
    { src: 'MEDIA/work pics/128498.jpg',  cat: 'training', alt: 'Training session' },
    { src: 'MEDIA/work pics/128506.jpg',  cat: 'training', alt: 'Training session' },
    { src: 'MEDIA/work pics/128510.jpg',  cat: 'training', alt: 'Training session' },
    { src: 'MEDIA/work pics/128516.jpg',  cat: 'training', alt: 'Training session' },
    { src: 'MEDIA/work pics/128517.jpg',  cat: 'events',   alt: 'Company event' },
    { src: 'MEDIA/work pics/128518.jpg',  cat: 'events',   alt: 'Company event' },
    { src: 'MEDIA/work pics/128519.jpg',  cat: 'events',   alt: 'Company event' },
    { src: 'MEDIA/work pics/128530.jpg',  cat: 'events',   alt: 'Company event' },
    { src: 'MEDIA/work pics/IMG_20260327_193521_329.jpg', cat: 'events', alt: 'Company event' },
    { src: 'MEDIA/work pics/IMG_20260327_193549_846.jpg', cat: 'events', alt: 'Company event' },
  ];

  const videoFiles = [
    'MEDIA/New folder/20250322_113120.mp4',
    'MEDIA/New folder/20250322_144815.mp4',
    'MEDIA/New folder/20250328_101322.mp4',
    'MEDIA/New folder/20250405_112413.mp4',
    'MEDIA/New folder/20250405_112436.mp4',
    'MEDIA/New folder/video_2026-03-27_20-03-50.mp4',
    'MEDIA/New folder/video_2026-03-27_20-05-58.mp4',
    'MEDIA/New folder/video_2026-03-27_20-06-19.mp4',
    'MEDIA/New folder/video_2026-03-27_20-06-30.mp4',
  ];

  // Flat items array used by lightbox navigation
  // Images first, then videos — but we track index per-source-type for the lightbox
  const items = [
    ...imageFiles.map(f => ({ type: 'image', src: f.src, alt: f.alt, cat: f.cat })),
    ...videoFiles.map(v => ({ type: 'video', src: v })),
  ];

  /* ─────────────────────────────────────────
     2.  Filter tabs
  ───────────────────────────────────────── */
  const tabs      = document.querySelectorAll('.gtab');
  const galleryItems = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.gcat === filter) {
          item.style.display = '';
          // Re-trigger reveal animation
          item.classList.remove('revealed');
          void item.offsetWidth; // reflow
          item.classList.add('revealed');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ─────────────────────────────────────────
     3.  Lightbox
  ───────────────────────────────────────── */
  const lightbox  = document.getElementById('lightbox');
  const lbMedia   = document.getElementById('lb-media');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');

  let currentIndex = 0;
  let currentPool  = []; // subset of items currently visible (all or filtered)

  function buildPool() {
    const activeTab = document.querySelector('.gtab.active');
    const filter = activeTab ? activeTab.dataset.filter : 'all';
    if (filter === 'all') {
      currentPool = [...items];
    } else if (filter === 'video') {
      currentPool = items.filter(i => i.type === 'video');
    } else {
      currentPool = items.filter(i => i.type === 'image' && i.cat === filter);
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
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.controls = true;
      vid.autoplay = true;
      vid.playsInline = true;
      vid.style.maxWidth  = '90vw';
      vid.style.maxHeight = '85vh';
      vid.style.borderRadius = '12px';
      lbMedia.appendChild(vid);
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
    // Pause any playing video
    const vid = lbMedia.querySelector('video');
    if (vid) { vid.pause(); vid.src = ''; }
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    const vid = lbMedia.querySelector('video');
    if (vid) { vid.pause(); }
    currentIndex = (currentIndex - 1 + currentPool.length) % currentPool.length;
    renderLbMedia(currentPool[currentIndex]);
  }

  function showNext() {
    const vid = lbMedia.querySelector('video');
    if (vid) { vid.pause(); }
    currentIndex = (currentIndex + 1) % currentPool.length;
    renderLbMedia(currentPool[currentIndex]);
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', showPrev);
  lbNext.addEventListener('click', showNext);

  // Click outside media to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });

  /* ─────────────────────────────────────────
     4.  Attach click to gallery image items
  ───────────────────────────────────────── */
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src  = item.querySelector('img').getAttribute('src');
      buildPool();
      const idx = currentPool.findIndex(p => p.src === src);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  /* ─────────────────────────────────────────
     5.  Video cards: hover-play & click lightbox
  ───────────────────────────────────────── */
  const vidCards = document.querySelectorAll('.vid-card');

  vidCards.forEach((card, i) => {
    const thumb = card.querySelector('.vid-thumb');
    const playBtn = card.querySelector('.vid-play-btn');

    // Hover play/pause
    card.addEventListener('mouseenter', () => {
      if (thumb) {
        thumb.play().catch(() => {});
        if (playBtn) playBtn.style.opacity = '0';
      }
    });

    card.addEventListener('mouseleave', () => {
      if (thumb) {
        thumb.pause();
        thumb.currentTime = 0;
        if (playBtn) playBtn.style.opacity = '1';
      }
    });

    // Click: open in lightbox — video pool starts after images
    card.addEventListener('click', () => {
      if (thumb) { thumb.pause(); }
      const videoPoolStart = imageFiles.length;
      openLightbox(videoPoolStart + i);
    });
  });

})();
