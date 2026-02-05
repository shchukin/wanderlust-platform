export const create = () => {
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
};
