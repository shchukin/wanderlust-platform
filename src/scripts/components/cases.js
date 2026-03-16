export const cases = () => {
    const labels = document.querySelectorAll('[data-cases-target]');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.casesTarget;
            const targetTab = document.querySelector(`[data-cases-tab="${targetRef}"]`);

            if (targetTab) {
                document.querySelectorAll('.cases__tab').forEach((tab) => {
                    tab.classList.remove('cases__tab--current');
                });

                targetTab.classList.add('cases__tab--current');
            }
        });
    });
};
