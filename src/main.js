/* Jaydeep Exports — main interactions */
(() => {
  const D = window.JAYDEEP_DATA;
  if (!D) { console.error('JAYDEEP_DATA missing'); return; }

  /* ============== Hero animated jali ============== */
  const heroCanvas = document.getElementById('heroCanvas');
  function buildJali() {
    const w = window.innerWidth;
    const cols = w < 480 ? 6 : w < 880 ? 9 : 14;
    heroCanvas.style.setProperty('--cols', cols);
    heroCanvas.innerHTML = '';
    const rows = Math.ceil((window.innerHeight + 100) / (w / cols));
    const total = cols * rows;
    // SVG mask patterns — terracotta jali shapes
    const masks = [
      // diamond
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><polygon points='50,4 96,50 50,96 4,50' fill='black'/></svg>")`,
      // circle
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='black'/></svg>")`,
      // flower
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 5 Q60 30 50 50 Q40 30 50 5 Z M95 50 Q70 60 50 50 Q70 40 95 50 Z M50 95 Q40 70 50 50 Q60 70 50 95 Z M5 50 Q30 40 50 50 Q30 60 5 50 Z' fill='black'/><circle cx='50' cy='50' r='10' fill='black'/></svg>")`,
      // cross
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='40' y='5' width='20' height='90' fill='black'/><rect x='5' y='40' width='90' height='20' fill='black'/></svg>")`,
      // ring
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='44' fill='none' stroke='black' stroke-width='14'/></svg>")`,
      // square
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='12' y='12' width='76' height='76' fill='black' transform='rotate(45 50 50)'/></svg>")`,
      // dot grid
      `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='30' cy='30' r='10' fill='black'/><circle cx='70' cy='30' r='10' fill='black'/><circle cx='30' cy='70' r='10' fill='black'/><circle cx='70' cy='70' r='10' fill='black'/></svg>")`,
    ];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const c = document.createElement('div');
      c.className = 'jali-cell';
      // Center stagger: cells near horizontal center & lower 2/3 appear first
      const r = Math.floor(i / cols), col = i % cols;
      const cx = (col + .5) / cols, cy = (r + .5) / rows;
      const dist = Math.hypot(cx - .5, cy - .65) * 1000;
      c.style.setProperty('--d', Math.floor(dist + Math.random() * 200));
      // Sparse: only ~55% of cells get a mask shape (others stay blank for breath)
      if (Math.random() < .55) {
        const m = masks[Math.floor(Math.random() * masks.length)];
        c.style.setProperty('--mask', m);
      }
      frag.appendChild(c);
    }
    heroCanvas.appendChild(frag);
  }
  buildJali();
  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(buildJali, 250);
  });

  /* ============== Parallax on hero ============== */
  const heroInner = document.querySelector('.hero-inner');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroCanvas.style.transform = `translateY(${y * 0.35}px)`;
          if (heroInner) heroInner.style.transform = `translateY(${y * -0.12}px)`;
          heroInner.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ============== Topbar scroll state ============== */
  const topbar = document.getElementById('topbar');
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* ============== Mobile menu ============== */
  const hb = document.getElementById('hamburger');
  const mm = document.getElementById('mobileMenu');
  hb.addEventListener('click', () => {
    const open = mm.classList.toggle('open');
    hb.classList.toggle('open', open);
    hb.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mm.classList.remove('open'); hb.classList.remove('open'); document.body.style.overflow = '';
  }));

  /* ============== Reveals (IntersectionObserver) ============== */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal, .line-mask').forEach(el => io.observe(el));

  /* ============== Hero line-mask trigger on load ============== */
  requestAnimationFrame(() => {
    document.querySelectorAll('.hero .line-mask').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 200 + i * 140);
    });
  });

  /* ============== Hero stats count-up ============== */
  const counters = document.querySelectorAll('[data-count]');
  const ioCount = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const dur = 1400; const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + '+';
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      ioCount.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => ioCount.observe(c));

  /* ============== Magnetic buttons ============== */
  document.querySelectorAll('[data-magnet]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  /* ============== Catalogue ============== */
  const tabs = document.getElementById('tabs');
  const grid = document.getElementById('productGrid');
  const resultCount = document.getElementById('resultCount');
  let currentCat = 'all';

  const categoryMap = Object.fromEntries(D.categories.map(c => [c.id, c.label]));

  function countByCat(catId) {
    if (catId === 'all') return D.products.length;
    return D.products.filter(p => p.category === catId).length;
  }

  // Build tabs
  D.categories.forEach(c => {
    const b = document.createElement('button');
    b.className = 'tab'; b.role = 'tab';
    b.dataset.cat = c.id;
    b.setAttribute('aria-selected', c.id === 'all' ? 'true' : 'false');
    b.innerHTML = `${c.label}<span class="count">${countByCat(c.id).toString().padStart(2,'0')}</span>`;
    b.addEventListener('click', () => setCat(c.id));
    tabs.appendChild(b);
  });

  function setCat(catId) {
    currentCat = catId;
    tabs.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.cat === catId)));
    renderGrid();
  }

  function renderGrid() {
    const list = currentCat === 'all' ? D.products : D.products.filter(p => p.category === currentCat);
    grid.innerHTML = '';
    resultCount.textContent = `${list.length.toString().padStart(2,'0')} / ${D.products.length} ITEMS`;
    list.forEach((p, i) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.dataset.id = p.id;
      const specPeek = p.specs.slice(0, 2).map(s => `<span class="chip">${s.label} · ${s.value}</span>`).join('');
      card.innerHTML = `
        <div class="card-img">
          <span class="card-cat">${categoryMap[p.category] || ''}</span>
          <img loading="lazy" src="${p.image}" alt="${p.name}" />
          <div class="card-peek">${specPeek}</div>
          <div class="card-plus">+</div>
        </div>
        <div class="card-meta">
          <div class="card-name">${p.name}</div>
          <div class="card-sub">${p.sub}</div>
        </div>
      `;
      card.addEventListener('click', () => openSheet(p.id));
      grid.appendChild(card);
      // staggered enter
      setTimeout(() => card.classList.add('in'), Math.min(i, 12) * 35);
    });
  }
  renderGrid();

  /* ============== Features ============== */
  const featureList = document.getElementById('featureList');
  D.features.forEach((f, i) => {
    const li = document.createElement('li');
    li.className = 'reveal';
    li.innerHTML = `
      <div class="f-num">${(i+1).toString().padStart(2,'0')}</div>
      <div class="f-body">
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    `;
    featureList.appendChild(li);
    io.observe(li);
  });

  /* ============== Detail sheet ============== */
  const sheet = document.getElementById('sheet');
  const sheetBackdrop = document.getElementById('sheetBackdrop');
  const sheetHero = document.getElementById('sheetHero');
  const sheetBody = document.getElementById('sheetBody');
  const sheetCat = document.getElementById('sheetCat');
  const sheetClose = document.getElementById('sheetCloseBtn');

  function openSheet(id) {
    const p = D.products.find(x => x.id === id); if (!p) return;
    sheetCat.textContent = (categoryMap[p.category] || 'PRODUCT').toUpperCase();
    sheetHero.innerHTML = `<span class="sheet-cat">${categoryMap[p.category] || ''}</span><img src="${p.image}" alt="${p.name}" />`;
    const specsHTML = p.specs.map(s => `<div><div class="lbl">${s.label}</div><div class="val">${s.value}</div></div>`).join('');
    const related = D.products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3);
    const relHTML = related.length ? `
      <div class="related">
        <h4>Pairs well with</h4>
        <div class="related-grid">
          ${related.map(r => `
            <div class="rel-card" data-id="${r.id}">
              <div class="img"><img loading="lazy" src="${r.image}" alt="${r.name}"/></div>
              <p>${r.name}</p>
            </div>
          `).join('')}
        </div>
      </div>` : '';

    const waText = encodeURIComponent(`Hi Jaydeep Exports, I'd like to enquire about the "${p.name}" (${p.sub}).`);
    sheetBody.innerHTML = `
      <h3>${p.name}</h3>
      <div class="sheet-sub">${p.sub}</div>
      <div class="spec-grid">${specsHTML}</div>
      <div class="sheet-cta">
        <a class="btn btn-wa lg" href="https://wa.me/918460212807?text=${waText}" target="_blank" rel="noopener" data-magnet>
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.5 0 .2 5.3.2 11.81c0 2.08.55 4.11 1.59 5.91L0 24l6.4-1.69a11.78 11.78 0 0 0 5.6 1.43h.01c6.5 0 11.81-5.3 11.81-11.81 0-3.16-1.23-6.13-3.3-8.45z"/></svg>
          Enquire about ${p.name}
        </a>
        <a class="btn btn-ghost lg" href="mailto:jaydeepexporrts@gmail.com?subject=${encodeURIComponent('Enquiry: '+p.name)}">Email enquiry</a>
      </div>
      ${relHTML}
    `;
    sheet.classList.add('open');
    sheetBackdrop.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    sheet.scrollTop = 0;

    sheet.querySelectorAll('.rel-card').forEach(r => {
      r.addEventListener('click', () => openSheet(r.dataset.id));
    });
  }
  function closeSheet() {
    sheet.classList.remove('open');
    sheetBackdrop.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  sheetBackdrop.addEventListener('click', closeSheet);
  sheetClose.addEventListener('click', closeSheet);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

  // Touch swipe-down to dismiss on mobile
  let touchY0 = null;
  sheet.addEventListener('touchstart', e => {
    if (sheet.scrollTop > 0) { touchY0 = null; return; }
    touchY0 = e.touches[0].clientY;
  }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    if (touchY0 == null) return;
    const dy = e.touches[0].clientY - touchY0;
    if (dy > 0) sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  sheet.addEventListener('touchend', e => {
    if (touchY0 == null) { sheet.style.transform = ''; return; }
    const last = e.changedTouches[0].clientY - touchY0;
    sheet.style.transform = '';
    if (last > 120) closeSheet();
    touchY0 = null;
  });

  /* ============== Year ============== */
  document.getElementById('copyrightYear').textContent = new Date().getFullYear();

})();
