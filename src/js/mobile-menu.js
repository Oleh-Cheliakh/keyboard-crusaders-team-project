(() => {
  const menuBtnRef = document.querySelector('[data-menu-open]');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu-backdrop]');
  const mobileNavLinksRef = document.querySelector('[data-menu-nav-links]');

  menuBtnRef.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
  mobileNavLinksRef.addEventListener('click', clickMobileNav);
  mobileMenuRef.addEventListener('click', clickBackdrop);

  function clickBackdrop(e) {
    e.target === e.currentTarget && toggleModal();
  }

  function clickMobileNav(e) {
    e.target?.tagName === 'A' && toggleModal();
  }

  function toggleModal() {
    mobileMenuRef.classList.toggle('is-open-mobile-menu');
  }
})();
