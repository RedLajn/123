const TOGGLE_MENU_EL_ID = 'js-toggle-menu';
const ACTIVE_LIST_CLASS_NAME = 'menu__nav-list--active';
const ACTIVE_TOGGLE_CLASS_NAME = 'menu__nav-button--active';
const MENU_EL_ID = 'js-menu';
const BREAKPOINT_QUERY = '(min-width: 1024px)';

const toggleMenuEl = document.getElementById(TOGGLE_MENU_EL_ID);
toggleMenuEl?.addEventListener('click', () => {
    const menuEl = document.getElementById(MENU_EL_ID);
    menuEl?.classList.toggle(ACTIVE_LIST_CLASS_NAME);
    toggleMenuEl.classList.toggle(ACTIVE_TOGGLE_CLASS_NAME);
});

const mediaQuery = window.matchMedia(BREAKPOINT_QUERY);
mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
        const menuEl = document.getElementById(MENU_EL_ID);
        menuEl?.classList.remove(ACTIVE_LIST_CLASS_NAME);
        toggleMenuEl?.classList.remove(ACTIVE_TOGGLE_CLASS_NAME);
    }
});
