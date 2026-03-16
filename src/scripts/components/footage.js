export const footage = () => {
    const labels = document.querySelectorAll('.footage .checkboxes-menu__item label');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.footageTarget;
            const targetTab = document.querySelector(`[data-footage-tab="${targetRef}"]`);

            document.querySelectorAll('.footage__tab').forEach((tab) => {
                tab.classList.remove('footage__tab--current');
            });

            if (targetTab) {
                targetTab.classList.add('footage__tab--current');
            }
        });
    });
};
