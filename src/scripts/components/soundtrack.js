export const soundtrack = () => {
    const labels = document.querySelectorAll('[data-soundtrack-target]');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.soundtrackTarget;
            const targetTab = document.querySelector(`[data-soundtrack-tab="${targetRef}"]`);

            if (targetTab) {
                document.querySelectorAll('.soundtrack__tab').forEach((tab) => {
                    tab.classList.remove('soundtrack__tab--current');
                });

                targetTab.classList.add('soundtrack__tab--current');
            }
        });
    });
};
