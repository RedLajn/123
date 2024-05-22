const toggleMenuEl = document.getElementById('js-toggle-menu');
toggleMenuEl?.addEventListener('click', () => {
    const menuEl = document.getElementById('js-menu');
    menuEl?.classList.toggle('menu__nav-list--active');
});
