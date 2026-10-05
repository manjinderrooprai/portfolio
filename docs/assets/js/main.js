/**
 * main.js — Futuristic Portfolio Interactive Layer
 * GitHub Pages Static Build — No WordPress dependencies
 *
 * Features:
 *  - tsParticles neural-net background
 *  - Typed.js typewriter tagline
 *  - Scroll-reveal animations (IntersectionObserver)
 *  - Sticky header + reading-progress bar
 *  - Proficiency bar animations
 *  - Timeline fill animation
 *  - Mobile navigation toggle
 *  - Smooth-scroll for anchor links
 *  - Active nav link highlight (section spy)
 *  - Contact form with mailto fallback
 *  - Mouse-tracking glow on glass cards
 *  - Orb parallax on mouse move
 *  - Infographic node stagger entrance
 *  - Glitch headline effect
 *  - Futuristic data-stream cursor trail
 *  - Number counter animation
 *  - Skip-to-main accessibility link
 *  - Page fade-in on load
 */

(function () {
  'use strict';

  /* ── Utility helpers ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

  /* ══════════════════════════════════════════════════════════
     1. tsParticles — Neural-net hero background
  ══════════════════════════════════════════════════════════ */
  function initParticles() {
    if (typeof tsParticles === 'undefined' || !$('#particles-canvas')) return;

    tsParticles.load('particles-canvas', {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.35 } },
          push: { quantity: 2 },
        },
      },
      particles: {
        number: { value: 70, density: { enable: true, area: 900 } },
        color: { value: ['#00d4ff', '#00ff88', '#b060ff', '#ff3dce'] },
        links: {
          enable: true,
          distance: 150,
          color: '#00d4ff',
          opacity: 0.07,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        opacity: {
          value: { min: 0.15, max: 0.55 },
          animation: { enable: true, speed: 1.2, minimumValue: 0.05 },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1, max: 2.5 },
          animation: { enable: false },
        },
      },
      detectRetina: true,
    }).catch(console.error);
  }

  /* ══════════════════════════════════════════════════════════
     2. Typed.js — Hero tagline typewriter
  ══════════════════════════════════════════════════════════ */
  function initTyped() {
    const el = $('#typed-tagline');
    if (!el || typeof Typed === 'undefined') return;

    const staticCursor = $('.hero-section__cursor');
    if (staticCursor) staticCursor.style.display = 'none';

    new Typed('#typed-tagline', {
      strings: [
        'Senior Technologist',
        'Backend & Platform Engineer',
        'Cloud & DevOps Specialist',
        'Generative AI Architect',
        'Kubernetes (EKS) Expert',
        'Spring AI & RAG Developer',
        'SRE & Observability Lead',
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2200,
      startDelay: 600,
      loop: true,
      smartBackspace: true,
      cursorChar: '|',
    });
  }

  /* ══════════════════════════════════════════════════════════
     3. Sticky header + scroll progress bar
  ══════════════════════════════════════════════════════════ */
  function initHeader() {
    const header   = $('#site-header');
    const progress = $('#scroll-progress');
    if (!header) return;

    let ticking = false;

    function updateHeader() {
      const scrollY   = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct       = docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0;

      header.classList.toggle('is-scrolled', scrollY > 40);
      if (progress) {
        progress.style.width = pct + '%';
        progress.setAttribute('aria-valuenow', Math.round(pct));
      }
      ticking = false;
    }

    on(window, 'scroll', () => {
      if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; }
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════
     4. Mobile navigation toggle
  ══════════════════════════════════════════════════════════ */
  function initMobileNav() {
    const toggle = $('#menu-toggle');
    const nav    = $('#site-nav');
    if (!toggle || !nav) return;

    on(toggle, 'click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
      document.body.style.overflow = !expanded ? 'hidden' : '';
    });

    $$('.site-nav__link', nav).forEach(link => {
      on(link, 'click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    on(document, 'click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     5. Scroll-reveal via IntersectionObserver
  ══════════════════════════════════════════════════════════ */
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

    $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
  }

  /* ══════════════════════════════════════════════════════════
     6. Active nav-link highlight (section spy)
  ══════════════════════════════════════════════════════════ */
  function initSectionSpy() {
    const sections = $$('section[id]');
    const navLinks = $$('.site-nav__link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(s => spy.observe(s));
  }

  /* ══════════════════════════════════════════════════════════
     7. Proficiency bar animations
  ══════════════════════════════════════════════════════════ */
  function initProficiencyBars() {
    const bars = $$('.proficiency-item__fill[data-width]');
    if (!bars.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width + '%';
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    bars.forEach(bar => obs.observe(bar));
  }

  /* ══════════════════════════════════════════════════════════
     8. Timeline track fill animation
  ══════════════════════════════════════════════════════════ */
  function initTimelineFill() {
    const fill = $('#timeline-fill');
    if (!fill) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) fill.style.height = '100%';
      });
    }, { threshold: 0.1 });

    obs.observe(fill.parentElement);
  }

  /* ══════════════════════════════════════════════════════════
     9. Smooth scroll for all internal anchor links
  ══════════════════════════════════════════════════════════ */
  function initSmoothScroll() {
    on(document, 'click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ══════════════════════════════════════════════════════════
     10. Mouse-tracking glow on glass cards
  ══════════════════════════════════════════════════════════ */
  function initCardGlow() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const styleTag = document.createElement('style');
    styleTag.textContent = `
      .glass-card {
        --mouse-x: 50%;
        --mouse-y: 50%;
      }
      .glass-card::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        opacity: 0;
        background: radial-gradient(
          360px circle at var(--mouse-x) var(--mouse-y),
          rgba(0, 212, 255, 0.07),
          transparent 60%
        );
        transition: opacity 0.4s ease;
        pointer-events: none;
        z-index: 0;
      }
      .glass-card:hover::after { opacity: 1; }
    `;
    document.head.appendChild(styleTag);

    $$('.glass-card').forEach(card => {
      on(card, 'mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     11. Back-to-top button
  ══════════════════════════════════════════════════════════ */
  function initBackToTop() {
    const btn = $('.site-footer__back-to-top');
    if (!btn) return;
    on(btn, 'click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ══════════════════════════════════════════════════════════
     12. Contact Form — mailto fallback (no server needed)
  ══════════════════════════════════════════════════════════ */
  function initContactForm() {
    const form    = $('#contact-form');
    const submit  = $('#contact-submit');
    const success = $('#contact-form-success');
    const error   = $('#contact-form-error');
    if (!form) return;

    function validateField(input) {
      const errorEl = $('#' + input.id + '-error');
      let msg = '';
      if (input.required && !input.value.trim()) {
        msg = 'This field is required.';
      } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        msg = 'Please enter a valid email address.';
      }
      if (errorEl) errorEl.textContent = msg;
      input.classList.toggle('is-invalid', !!msg);
      return !msg;
    }

    $$('input, textarea', form).forEach(input => {
      on(input, 'blur', () => validateField(input));
      on(input, 'input', () => { if (input.classList.contains('is-invalid')) validateField(input); });
    });

    on(form, 'submit', (e) => {
      e.preventDefault();

      const inputs   = $$('input[required], textarea[required]', form);
      const allValid = inputs.map(validateField).every(Boolean);
      if (!allValid) {
        inputs.find(i => i.classList.contains('is-invalid'))?.focus();
        return;
      }

      if (success) success.hidden = true;
      if (error)   error.hidden   = true;

      const submitText    = $('.contact-form__submit-text',    submit);
      const submitLoading = $('.contact-form__submit-loading', submit);
      if (submitText)    submitText.hidden    = true;
      if (submitLoading) submitLoading.hidden = false;
      submit.disabled = true;

      const name    = form.querySelector('[name="name"]').value    || '';
      const email   = form.querySelector('[name="email"]').value   || '';
      const subject = form.querySelector('[name="subject"]').value || 'Portfolio Contact from ' + name;
      const message = form.querySelector('[name="message"]').value || '';

      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );

      window.location.href = `mailto:rooprai0044@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

      setTimeout(() => {
        if (success) success.hidden = false;
        form.reset();
        if (submitText)    submitText.hidden    = false;
        if (submitLoading) submitLoading.hidden = true;
        submit.disabled = false;
      }, 800);
    });
  }

  /* ══════════════════════════════════════════════════════════
     13. Number counter animation
  ══════════════════════════════════════════════════════════ */
  function animateCounters() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const dur    = 1600;
        const start  = performance.now();

        function frame(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / dur, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          const value    = Math.round(eased * target);
          el.textContent = prefix + value + suffix;
          if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => obs.observe(c));
  }

  /* ══════════════════════════════════════════════════════════
     14. Orb parallax on mouse move
  ══════════════════════════════════════════════════════════ */
  function initOrbParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const orbs = $$('.hero-section__orb');
    if (!orbs.length) return;

    let rafId;
    on(window, 'mousemove', (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth  / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        orbs.forEach((orb, i) => {
          const depth = (i + 1) * 14;
          orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
        });
      });
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════
     15. Infographic node stagger entrance
  ══════════════════════════════════════════════════════════ */
  function initInfographicNodes() {
    const nodes = $$('.hero-infographic__node');
    nodes.forEach((node, i) => {
      node.style.opacity   = '0';
      node.style.transform = (node.style.transform || '') + ' scale(0)';
      node.style.transition = `opacity 0.5s ease ${0.8 + i * 0.12}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.8 + i * 0.12}s`;
      setTimeout(() => {
        node.style.opacity   = '1';
        node.style.transform = node.style.transform.replace(' scale(0)', '');
      }, 100);
    });
  }

  /* ══════════════════════════════════════════════════════════
     16. Mobile certs horizontal scroll
  ══════════════════════════════════════════════════════════ */
  function initCertsCarousel() {
    if (window.innerWidth > 768) return;
    const featured = $('.certs-featured');
    if (!featured) return;
    featured.style.overflowX      = 'auto';
    featured.style.scrollSnapType = 'x mandatory';
    $$('.cert-card--featured', featured).forEach(card => {
      card.style.scrollSnapAlign = 'start';
      card.style.minWidth        = '260px';
    });
  }

  /* ══════════════════════════════════════════════════════════
     17. Futuristic cursor glow trail
  ══════════════════════════════════════════════════════════ */
  function initCursorTrail() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

    const trail = document.createElement('div');
    trail.id = 'cursor-trail';
    Object.assign(trail.style, {
      position: 'fixed',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: '99999',
      transform: 'translate(-50%,-50%)',
      transition: 'transform 0.05s linear',
      mixBlendMode: 'screen',
    });
    document.body.appendChild(trail);

    let mx = 0, my = 0;
    on(window, 'mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      trail.style.left = mx + 'px';
      trail.style.top  = my + 'px';
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════════════
     18. Accessibility: skip to main
  ══════════════════════════════════════════════════════════ */
  function initSkipLink() {
    const skip = document.createElement('a');
    skip.href        = '#main';
    skip.className   = 'skip-link';
    skip.textContent = 'Skip to main content';
    skip.style.cssText = `
      position:absolute; top:-100%; left:16px; z-index:10000;
      background:var(--cyan); color:var(--bg-0);
      padding:8px 16px; border-radius:4px; font-weight:700;
      font-size:14px; text-decoration:none; transition:top .2s;
    `;
    on(skip, 'focus', () => { skip.style.top = '16px'; });
    on(skip, 'blur',  () => { skip.style.top = '-100%'; });
    document.body.prepend(skip);
  }

  /* ══════════════════════════════════════════════════════════
     19. Page fade-in after load
  ══════════════════════════════════════════════════════════ */
  function initPageFade() {
    document.documentElement.style.opacity    = '0';
    document.documentElement.style.transition = 'opacity 0.45s ease';
    const reveal = () => { document.documentElement.style.opacity = '1'; };
    if (document.readyState === 'complete') reveal();
    else on(window, 'load', reveal);
  }

  /* ══════════════════════════════════════════════════════════
     20. Dynamic year in footer copyright
  ══════════════════════════════════════════════════════════ */
  function initYear() {
    const el = $('#current-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ══════════════════════════════════════════════════════════
     INIT — Run everything
  ══════════════════════════════════════════════════════════ */
  function init() {
    initHeader();
    initMobileNav();
    initScrollReveal();
    initSectionSpy();
    initSmoothScroll();
    initBackToTop();
    initProficiencyBars();
    initTimelineFill();
    initCardGlow();
    initContactForm();
    initCertsCarousel();
    animateCounters();
    initOrbParallax();
    initCursorTrail();
    initSkipLink();
    initYear();

    // Defer heavy visual items
    const deferred = () => {
      initParticles();
      initTyped();
      initInfographicNodes();
    };

    if (window.requestIdleCallback) {
      requestIdleCallback(deferred, { timeout: 2000 });
    } else {
      setTimeout(deferred, 100);
    }
  }

  // Boot
  initPageFade();

  if (document.readyState === 'loading') {
    on(document, 'DOMContentLoaded', init);
  } else {
    init();
  }

})();
