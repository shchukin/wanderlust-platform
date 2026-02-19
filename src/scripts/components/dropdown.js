export const dropdown = () => {

    document.addEventListener('click', (event) => {
        if (event.target.closest('.dropdown__handler .button')) {
            event.preventDefault();
            event.target.closest('.dropdown').classList.toggle('dropdown--expanded');
            return;
        }

        if (event.target.closest('.dropdown__close .button')) {
            event.preventDefault();
            event.target.closest('.dropdown').classList.remove('dropdown--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.dropdown')) {
            const $dropdown = document.querySelector('.dropdown--expanded');
            $dropdown?.classList.remove('dropdown--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $dropdown = document.querySelectorAll('.dropdown--expanded');
            $dropdown.forEach((dropdown) => {
                dropdown.classList.remove('dropdown--expanded');
            });
        }
    });
};
