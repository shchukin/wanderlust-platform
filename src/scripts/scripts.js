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
            event.target.closest('.nav__section').classList.toggle('nav__section--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.nav__sub-menu')) {
            const expandedSection = document.querySelector('.nav__section--expanded');
            expandedSection?.classList.remove('nav__section--expanded');
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


    /* Toggle create dropdown ("New Project" in the header) */

    document.addEventListener('click', (event) => {

        if (event.target.closest('.create__handler .button')) {
            event.preventDefault();
            event.target.closest('.create').classList.toggle('create--expanded');
            return;
        }

        if (event.target.closest('.create__close .button')) {
            event.preventDefault();
            event.target.closest('.create').classList.remove('create--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.create')) {
            const expandedCreate = document.querySelector('.create--expanded');
            expandedCreate?.classList.remove('create--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const expandedCreates = document.querySelectorAll('.create--expanded');
            expandedCreates.forEach((create) => {
                create.classList.remove('create--expanded');
            });
        }
    });
});
