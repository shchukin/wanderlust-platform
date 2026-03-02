export const project = () => {
    const $navigation = document.querySelector('.project__navigation');
    const $navList = $navigation?.querySelector('.project__nav-list');
    const $addition = $navigation?.querySelector('.project__nav-addition');
    const $dropdownMenu = $addition?.querySelector('.project__nav-addition-dropdown .menu');

    const tabs = $navList ? Array.from($navList.querySelectorAll('.project__tab')) : [];

    const updateTabsOverflow = () => {
        if (!$navigation || !$navList || !$addition || !$dropdownMenu || !tabs.length) {
            return;
        }

        tabs.forEach((tab) => {
            $navList.appendChild(tab);
        });

        $dropdownMenu.querySelectorAll('.project__nav-overflow-item').forEach((item) => {
            item.remove();
        });

        const navigationRect = $navigation.getBoundingClientRect();
        const additionRect = $addition.getBoundingClientRect();

        if (!navigationRect.width || !additionRect.width) {
            return;
        }

        const maxRight = additionRect.left;
        let movedAny = false;

        let currentTabs = Array.from($navList.querySelectorAll('.project__tab'));
        let lastTab = currentTabs[currentTabs.length - 1];

        const $menuClose = $dropdownMenu.querySelector('.menu__close');

        while (lastTab) {
            const tabRect = lastTab.getBoundingClientRect();

            if (tabRect.right <= maxRight) {
                break;
            }

            const menuItem = document.createElement('a');
            menuItem.className = 'menu__item project__nav-overflow-item';
            const labelElement = lastTab.querySelector('.project__tab-label');
            const labelText = labelElement?.textContent?.trim() || lastTab.textContent.trim();

            if (labelText) {
                menuItem.textContent = labelText;
            }

            const href = lastTab.getAttribute('href');
            if (href) {
                menuItem.setAttribute('href', href);
            } else {
                menuItem.setAttribute('href', '#');
            }

            if (lastTab.classList.contains('project__tab--current')) {
                menuItem.classList.add('menu__item--current');
            }

            if ($menuClose) {
                $dropdownMenu.insertBefore(menuItem, $menuClose);
            } else {
                $dropdownMenu.appendChild(menuItem);
            }

            lastTab.remove();
            movedAny = true;

            currentTabs = Array.from($navList.querySelectorAll('.project__tab'));
            lastTab = currentTabs[currentTabs.length - 1];
        }

        if (movedAny) {
            $addition.classList.remove('project__nav-addition--is-not-needed');
        } else {
            $addition.classList.add('project__nav-addition--is-not-needed');
        }
    };

    if ($navigation) {
        window.addEventListener('resize', updateTabsOverflow);
        window.requestAnimationFrame(updateTabsOverflow);
    }

    document.addEventListener('click', (event) => {
        if (event.target.closest('.project__nav-addition-handler')) {
            event.preventDefault();
            event.target.closest('.project__nav-addition').classList.toggle('project__nav-addition--expanded');
            return;
        }

        if (event.target.closest('.project__nav-addition .menu__close .button')) {
            event.preventDefault();
            event.target.closest('.project__nav-addition').classList.remove('project__nav-addition--expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.project__nav-addition')) {
            const $project = document.querySelector('.project__nav-addition--expanded');
            $project?.classList.remove('project__nav-addition--expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $project = document.querySelectorAll('.project__nav-addition--expanded');
            $project.forEach((project) => {
                project.classList.remove('project__nav-addition--expanded');
            });
        }
    });
};
