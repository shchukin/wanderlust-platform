export const tabs = () => {
    const labels = document.querySelectorAll('.tabs .checkboxes-menu__item label');

    labels.forEach((label) => {
        label.addEventListener('click', () => {
            const targetRef = label.dataset.tabTarget;

            const targetTab = document.querySelector(`[data-tab-body="${targetRef}"]`);

            document.querySelectorAll('.tabs__body').forEach((tab) => {
                tab.classList.remove('tabs__body--current');
            });

            if (targetTab) {
                targetTab.classList.add('tabs__body--current');
            }
        });
    });
};
