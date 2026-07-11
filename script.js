// Mobile nav toggle
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form: static hosting has no backend, so build a mailto: draft instead
const emailForm = document.getElementById('email-form');

if (emailForm) {
  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = emailForm.querySelector('#name').value.trim();
    const email = emailForm.querySelector('#email').value.trim();
    const message = emailForm.querySelector('#field').value.trim();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:mario.annier@gmail.com?subject=${subject}&body=${body}`;
  });
}
