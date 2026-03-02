export const project = () => {

    /* Dropdown functionality */

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


    /* Go through nav items and move them into dropdown if they don't fit */
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

        const navListRect = $navList.getBoundingClientRect();

        if (!navListRect.width) {
            return;
        }

        const maxRight = navListRect.right;
        let movedAny = false;

        let currentTabs = Array.from($navList.querySelectorAll('.project__tab'));
        let lastTab = currentTabs[currentTabs.length - 1];

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

            const $firstOverflow = $dropdownMenu.querySelector('.project__nav-overflow-item');
            const $menuClose = $dropdownMenu.querySelector('.menu__close');

            if ($firstOverflow) {
                $dropdownMenu.insertBefore(menuItem, $firstOverflow);
            } else if ($menuClose) {
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
        const scheduleUpdate = () => {
            window.requestAnimationFrame(updateTabsOverflow);
        };

        window.addEventListener('resize', scheduleUpdate);
        scheduleUpdate();

        const $html = document.documentElement;
        let sidebarTimer = null;

        const getSidebarTransitionDuration = () => {
            const styles = getComputedStyle($html);
            const raw = styles.getPropertyValue('--transition-sidebar').trim();

            if (!raw) {
                return 500;
            }

            const firstToken = raw.split(/\s+/)[0]; /* for example, "500ms" or "0.5s" */

            if (firstToken.endsWith('ms')) {
                const value = parseFloat(firstToken.slice(0, -2));
                return Number.isFinite(value) ? value : 500;
            }

            if (firstToken.endsWith('s')) {
                const value = parseFloat(firstToken.slice(0, -1));
                return Number.isFinite(value) ? value * 1000 : 500;
            }

            return 500;
        };

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    /* wait for sidebar animation to finish */
                    clearTimeout(sidebarTimer);
                    const duration = getSidebarTransitionDuration();
                    sidebarTimer = setTimeout(() => {
                        scheduleUpdate();
                    }, duration + 100);
                    break;
                }
            }
        });

        observer.observe($html, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }
};
