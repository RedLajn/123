const toggleMenuEl = document.getElementById('js-toggle-menu');

if (toggleMenuEl) {
    const menuEl = document.getElementById('js-menu');
    if (menuEl) {
        toggleMenuEl.addEventListener('click', () => {
            if (menuEl.classList.contains('menu__nav-list--active')) {
                menuEl.classList.remove('menu__nav-list--active');
            } else {
                menuEl.classList.add('menu__nav-list--active');
            }
        });
    }
}
