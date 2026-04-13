export const nav = () => {

    document.addEventListener('click', (event) => {

        /* Expand dropdown */
        if (event.target.closest('.nav__section:has(.nav__sub-menu) > .nav__link')) {
            event.preventDefault();
            event.target.closest('.nav__section').classList.toggle('nav__section--expanded');
        }
    });

};
