'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* global consts */

    const $html = document.documentElement;


    /* toggle sidebar */

    document.addEventListener('click', (event) => {
        const toggler = event.target.closest('.sidebar-toggler');
        if (!toggler) return;

        event.preventDefault();
        $html.classList.toggle('sidebar-expanded');
    });
});
