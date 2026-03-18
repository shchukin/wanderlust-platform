export const tabs = () => {
    const radios = document.querySelectorAll('[data-tab-target]');

    radios.forEach((radio) => {
        radio.addEventListener('change', () => {

            const targetRef = radio.dataset.tabTarget;
            const $targetTab = document.querySelector(`[data-tab-body="${targetRef}"]`);

            document.querySelectorAll('.tabs__body').forEach((tab) => {
                tab.classList.remove('tabs__body--current');
            });

            if ($targetTab) {
                $targetTab.classList.add('tabs__body--current');
            }
        });
    });
};
