(function () {
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', function () {
    const open = drawer.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href.split('/').pop() === path) {
      link.classList.add('active');
    }
  });
})();
