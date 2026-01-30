'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* global consts */

    const $html = document.documentElement;


    /* toggle sidebar */

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.sidebar-toggler')) return;
        event.preventDefault();
        $html.classList.toggle('sidebar-expanded');
    });


    /* Toggle nav sub-menu (collapsed sidebar only) */

    document.addEventListener('click', (event) => {

        if (event.target.closest('.nav__more')) {
            event.preventDefault();
            const navSection = event.target.closest('.nav__section');
            if (navSection) {
                navSection.classList.toggle('nav__section--expanded');
            }
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.nav__sub-menu')) {
            const expandedSection = document.querySelector('.nav__section--expanded');
            if (expandedSection) {
                expandedSection.classList.remove('nav__section--expanded');
            }
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const expandedSections = document.querySelectorAll('.nav__section--expanded');
            expandedSections.forEach((section) => {
                section.classList.remove('nav__section--expanded');
            });
        }
    });
});
