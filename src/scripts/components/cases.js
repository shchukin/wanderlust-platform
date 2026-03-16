export const cases = () => {
    const labels = document.querySelectorAll('.cases .checkboxes-menu__item label');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.casesTarget;
            const targetTab = document.querySelector(`[data-cases-tab="${targetRef}"]`);

            document.querySelectorAll('.cases__tab').forEach((tab) => {
                tab.classList.remove('cases__tab--current');
            });

            if (targetTab) {
                targetTab.classList.add('cases__tab--current');
            }
        });
    });
};
