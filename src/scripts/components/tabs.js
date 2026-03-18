export const tabs = () => {
    const tabsRoots = document.querySelectorAll('.tabs');

    tabsRoots.forEach((tabsRoot) => {
        const radios = tabsRoot.querySelectorAll('[data-tab-target]');

        radios.forEach((radio) => {
            radio.addEventListener('change', () => {
                const targetRef = radio.dataset.tabTarget;
                const $targetTab = tabsRoot.querySelector(`[data-tab-body="${targetRef}"]`);

                tabsRoot.querySelectorAll('.tabs__body').forEach((tab) => {
                    tab.classList.remove('tabs__body--current');
                });

                if ($targetTab) {
                    $targetTab.classList.add('tabs__body--current');
                }
            });
        });
    });
};
