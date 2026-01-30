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


    /* toggle nav sub-menu (collapsed sidebar only)*/

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav__more')) return;
        event.preventDefault();
        const navSection = event.target.closest('.nav__section');
        if (navSection) {
            navSection.classList.toggle('nav__section--expanded');
        }
    });
});
