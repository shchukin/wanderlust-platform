export const tabs = () => {
    const $tabs = document.querySelectorAll('.tabs');

    $tabs.forEach((tabsRoot) => {

        /* Step 1: Catch first of radio buttons with the [data-tab-target] to extract name="" attribute */
        const firstTargetRadio = tabsRoot.querySelector('[data-tab-target]');
        if (!firstTargetRadio || !firstTargetRadio.name) {
            return;
        }

        /* Step 2: Catch all radio buttons with the same name="". The thing is that not all of them may have data-tab-target="" */
        const radios = tabsRoot.querySelectorAll(`input[type="radio"][name="${firstTargetRadio.name}"]`);

        radios.forEach((radio) => {
            radio.addEventListener('change', () => {
                const targetRef = radio.dataset.tabTarget;
                const $targetTab = tabsRoot.querySelector(`[data-tab-body="${targetRef}"]`);

                tabsRoot.querySelectorAll('.tabs__item').forEach((tab) => {
                    tab.classList.remove('tabs__item--current');
                });

                if ($targetTab) {
                    $targetTab.classList.add('tabs__item--current');
                }
            });
        });
    });
};
