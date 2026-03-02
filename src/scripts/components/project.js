export const project = () => {

    /* Toggle New Project dropdown ("New Project" in the header) */
    document.addEventListener('click', (event) => {
        if (event.target.closest('.project__nav-addition-handler')) {
            event.preventDefault();
            event.target.closest('.project__nav-addition').classList.toggle('project__nav-addition--expanded');
            return;
        }

        if (event.target.closest('.project__nav-addition .menu__close .button')) {
            event.preventDefault();
            event.target.closest('.project__nav-addition').classList.remove('project__nav-addition--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.project__nav-addition')) {
            const $project = document.querySelector('.project__nav-addition--expanded');
            $project?.classList.remove('project__nav-addition--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $project = document.querySelectorAll('.project__nav-addition--expanded');
            $project.forEach((project) => {
                project.classList.remove('project--expanded');
            });
        }
    });
};
