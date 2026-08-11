// SteadFlow Energies — shared interactions

document.addEventListener('DOMContentLoaded', () => {

  /* ---- mobile nav ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- animated stat counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = val.toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countIo.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(el => countIo.observe(el));
  }

  /* ---- footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- contact / lead forms: lightweight client-side handling ---- */
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks — this is a demo form, not yet wired to a server. See the note in the project README for backend hookup.';
        note.style.color = 'var(--canopy-600)';
      }
      form.reset();
    });
  });

  /* ---- solar package calculator (Solar Solutions page) ---- */
  const calcForm = document.getElementById('load-calculator');
  if (calcForm) {
    const output = document.getElementById('calc-result');
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(calcForm);
      const lighting = data.get('lighting') === 'on' ? 1 : 0;
      const fridge = data.get('fridge') === 'on' ? 1 : 0;
      const pos = data.get('pos') === 'on' ? 1 : 0;
      const power_tools = data.get('power_tools') === 'on' ? 1 : 0;
      const score = lighting + fridge * 2 + pos + power_tools * 3;
      let pkg = 'Starter Package';
      if (score >= 6) pkg = 'Enterprise Package';
      else if (score >= 3) pkg = 'Business Package';
      output.hidden = false;
      output.innerHTML = `Based on your equipment, <strong>${pkg}</strong> is likely the closest fit. An assessment visit will confirm exact panel and battery sizing for your business.`;
    });
  }

});
