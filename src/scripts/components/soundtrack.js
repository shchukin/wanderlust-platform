export const soundtrack = () => {
    const labels = document.querySelectorAll('.soundtrack .checkboxes-menu__item label');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.soundtrackTarget;
            const targetTab = document.querySelector(`[data-soundtrack-tab="${targetRef}"]`);

            document.querySelectorAll('.soundtrack__tab').forEach((tab) => {
                tab.classList.remove('soundtrack__tab--current');
            });

            if (targetTab) {
                targetTab.classList.add('soundtrack__tab--current');
            }
        });
    });
};
