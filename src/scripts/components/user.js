export const user = () => {

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
};
