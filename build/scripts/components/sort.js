/* TO DO: this component needs actual programming.
 * At the moment we have only dropdown functionality in here.
 */

export const sort = () => {

    /* Toggle sort */
    document.addEventListener('click', (event) => {
        const $sortOrder = event.target.closest('.sort__order');
        if ($sortOrder) {
            event.preventDefault();
            const $sort = $sortOrder.closest('.sort');
            if ($sort) {
                const isDescending = $sort.classList.contains('sort__order--descending');
                $sort.classList.toggle('sort__order--ascending', isDescending);
                $sort.classList.toggle('sort__order--descending', !isDescending);
            }
            return;
        }

        if (event.target.closest('.sort__handler')) {
            event.preventDefault();
            event.target.closest('.sort').classList.toggle('sort--expanded');
            return;
        }

        if (event.target.closest('.sort__apply .button')) {
            event.preventDefault();
            event.target.closest('.sort').classList.remove('sort--expanded');
            return;
        }

        if (event.target.closest('.sort__cancel .link')) {
            event.preventDefault();
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
};
