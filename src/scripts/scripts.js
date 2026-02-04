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



    /* Toggle New Project dropdown ("New Project" in the header) */

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
            const $create = document.querySelector('.create--expanded');
            $create?.classList.remove('create--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $create = document.querySelectorAll('.create--expanded');
            $create.forEach((create) => {
                create.classList.remove('create--expanded');
            });
        }
    });


    /* Toggle user dropdown */

    document.addEventListener('click', (event) => {

        if (event.target.closest('.user__handler')) {
            event.preventDefault();
            event.target.closest('.user').classList.toggle('user--expanded');
            return;
        }

        if (event.target.closest('.user__dropdown .menu__close .button')) {
            event.preventDefault();
            event.target.closest('.user').classList.remove('user--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.user')) {
            const $user = document.querySelector('.user--expanded');
            $user?.classList.remove('user--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $user = document.querySelectorAll('.user--expanded');
            $user.forEach((user) => {
                user.classList.remove('user--expanded');
            });
        }
    });


    /* Toggle search dropdown */

    document.addEventListener('click', (event) => {

        if (event.target.closest('.search__handler')) {
            event.preventDefault();
            event.target.closest('.search__filter').classList.toggle('search__filter--expanded');
            return;
        }

        if (event.target.closest('.search__dropdown .menu__close .button')) {
            event.preventDefault();
            event.target.closest('.search__filter').classList.remove('search__filter--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.search__filter')) {
            const $search = document.querySelector('.search__filter--expanded');
            $search?.classList.remove('search__filter--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $search = document.querySelectorAll('.search__filter--expanded');
            $search.forEach((search) => {
                search.classList.remove('search__filter--expanded');
            });
        }
    });



    /* Toggle sort */

    document.addEventListener('click', (event) => {

        const $sortHandler = event.target.closest('.sort__handler');
        if ($sortHandler) {
            const $sortOrder = event.target.closest('.sort__order');
            if ($sortOrder && $sortHandler.contains($sortOrder)) {
                event.preventDefault();
                const isDescending = $sortOrder.classList.contains('sort__order--descending');
                $sortOrder.classList.toggle('sort__order--ascending', isDescending);
                $sortOrder.classList.toggle('sort__order--descending', !isDescending);
                alert('Change sort ascending/descending');
                return;
            }

            event.preventDefault();
            event.target.closest('.sort').classList.toggle('sort--expanded');
            return;
        }

        if (event.target.closest('.sort__apply .button')) {
            event.preventDefault();
            alert('Apply sort here');
            event.target.closest('.sort').classList.remove('sort--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.sort')) {
            const $sort = document.querySelector('.sort--expanded');
            $sort?.classList.remove('sort--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $sort = document.querySelectorAll('.sort--expanded');
            $sort.forEach((sort) => {
                sort.classList.remove('sort--expanded');
            });
        }
    });


    /* Detect if page was scrolled down */
    const togglePageScrollClass = () => {
        $html.classList.toggle('page-is-scrolled', window.scrollY >= 10);
    };

    togglePageScrollClass();
    window.addEventListener('scroll', togglePageScrollClass, { passive: true });


});
