export const search = () => {
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
};
