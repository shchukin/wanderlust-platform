export const footage = () => {
    const labels = document.querySelectorAll('[data-footage-target]');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.footageTarget;
            const targetTab = document.querySelector(`[data-footage-tab="${targetRef}"]`);

            if (targetTab) {
                document.querySelectorAll('.footage__tab').forEach((tab) => {
                    tab.classList.remove('footage__tab--current');
                });

                targetTab.classList.add('footage__tab--current');
            }
        });
    });
};
