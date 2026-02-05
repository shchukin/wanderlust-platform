export const nav = () => {
    /* Toggle nav sub-menu (collapsed sidebar only) */
    document.addEventListener('click', (event) => {
        if (event.target.closest('.nav__more')) {
            event.preventDefault();
            event.target.closest('.nav__section').classList.toggle('nav__section--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.nav__sub-menu')) {
            const $navSections = document.querySelector('.nav__section--expanded');
            $navSections?.classList.remove('nav__section--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $navSections = document.querySelectorAll('.nav__section--expanded');
            $navSections.forEach((section) => {
                section.classList.remove('nav__section--expanded');
            });
        }
    });
};
