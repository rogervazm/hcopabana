/* ============================================================
   Hotel Copacabana – main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── AOS ──────────────────────────────────────────────────
  AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });

  // ── GLightbox ───────────────────────────────────────────
  GLightbox({ selector: '[data-gallery]', touchNavigation: true, loop: true });

  // ── Navbar scroll ────────────────────────────────────────
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Smooth scroll para enlaces de anclaje ───────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      // Cierra el menú móvil si está abierto
      const bsCollapse = document.getElementById('navbarMain');
      if (bsCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(bsCollapse)?.hide();
      }
      const offset = nav.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Contadores animados ───────────────────────────────────
  const animateCounters = () => {
    document.querySelectorAll('.counter').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const counterObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    }, { threshold: 0.4 });
    counterObserver.observe(statsSection);
  }

  // ── FORMULARIO DE CONTACTO ────────────────────────────────
  //
  // OPCIÓN 1 – Formspree (recomendado, sin backend):
  //   1. Regístrate en https://formspree.io y crea un formulario gratuito
  //   2. En index.pug cambia el form a:
  //        form#contactForm.contact-form(action="https://formspree.io/f/TU_ID" method="POST")
  //   3. Elimina el e.preventDefault() de abajo y el bloque fetch()
  //
  // OPCIÓN 2 – EmailJS (sin backend):
  //   1. Crea cuenta en https://www.emailjs.com
  //   2. Agrega en layout.pug antes de main.js:
  //        script(src='https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js')
  //   3. Reemplaza el bloque fetch() por:
  //        emailjs.init('TU_PUBLIC_KEY');
  //        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form)
  //          .then(() => showMsg('success', '¡Mensaje enviado! Te contactaremos pronto.'))
  //          .catch(() => showMsg('error', 'Error al enviar. Escríbenos por WhatsApp.'));
  //
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  const showMsg = (type, text) => {
    formMsg.className = `form-feedback ${type}`;
    formMsg.textContent = text;
    formMsg.style.display = 'block';
    setTimeout(() => { formMsg.style.display = 'none'; }, 6000);
  };

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';

      // ── Reemplaza esta sección con Formspree o EmailJS ──
      // Simulación temporal (quitar cuando conectes el backend):
      await new Promise(r => setTimeout(r, 1200));
      showMsg('success', '¡Gracias! En breve nos pondremos en contacto contigo. También puedes escribirnos por WhatsApp.');
      form.reset();
      // ────────────────────────────────────────────────────

      btn.disabled = false;
      btn.innerHTML = originalText;
    });
  }

});
