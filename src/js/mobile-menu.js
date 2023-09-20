(() => {
  const menuBtnRef = document.querySelector('[data-menu-open]');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    mobileMenuRef.classList.toggle('is-open-mobile-menu');
  }
})();
