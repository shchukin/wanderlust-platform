export const nav = () => {

    const $nav = document.querySelector('.nav');

    document.addEventListener('click', (event) => {

        /* Root link (expand dropdown) */
        if (event.target.closest('.nav__section:has(.nav__sub-menu) > .nav__link')) {
            event.preventDefault();
            event.target.closest('.nav__section').classList.toggle('nav__section--expanded');
        }

        /* Any other link (make it current) */
        if (event.target.closest('.nav__link:not(.nav__section:has(.nav__sub-menu) > .nav__link)')) {
            event.preventDefault();
            $nav.querySelector('.nav__link--current').classList.remove('nav__link--current');
            event.target.closest('.nav__link').classList.add('nav__link--current');
        }
    });

};
