  const menuBtn = document.querySelector('#menu-btn');
  const mainNav = document.querySelector('#main-nav');
  const navLinks = document.querySelectorAll('nav a');

  function openNav() {
    mainNav.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    mainNav.setAttribute('aria-hidden', 'false');
  }

  function closeNav() {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    mainNav.setAttribute('aria-hidden', 'true');
  }

  function toggleNav() {
    if (mainNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  }

  function navLinksClick () {
    navLinks.forEach((a) => {
        a.addEventListener('click', toggleNav)
    });
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeNav();
      menuBtn.focus();
    }
  }

  menuBtn.addEventListener('click', toggleNav);
  document.addEventListener('keydown', handleKeydown);
  navLinksClick()