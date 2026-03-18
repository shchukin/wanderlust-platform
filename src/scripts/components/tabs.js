export const tabs = () => {
    const radios = document.querySelectorAll('.tabs__tags input[type="radio"]');

    radios.forEach((radio) => {
        radio.addEventListener('change', () => {

            const targetRef = radio.dataset.tabTarget;

            if (!targetRef) {
                return;
            }

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
