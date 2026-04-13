export const nav = () => {

    document.addEventListener('click', (event) => {

        /* Expand dropdown */
        if (event.target.closest('.nav__section:has(.nav__sub-menu) > .nav__link')) {
            event.preventDefault();
            event.target.closest('.nav__section').classList.toggle('nav__section--expanded');
        }

        /* If you need to catch the click on other links, use the same selector with :not, like so:
        if (event.target.closest('.nav__link:not(.nav__section:has(.nav__sub-menu) > .nav__link)')) {
            event.preventDefault();
            $nav.querySelector('.nav__link--current').classList.remove('nav__link--current');
            event.target.closest('.nav__link').classList.add('nav__link--current');
            go to link in here
        }
        */
    });

};
