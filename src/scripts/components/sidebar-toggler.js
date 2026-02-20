/* TO DO: check local storage on back-end so the sidebar won't flash on document ready
 */
export const sidebarToggler = () => {
    const $html = document.documentElement;
    const mediaQuery = window.matchMedia("(min-width: 1600px)");
    const STORAGE_KEY = 'sidebar-expanded';
    let timer = null;

    const saveState = (isExpanded) => {
        localStorage.setItem(STORAGE_KEY, isExpanded);
    };

    const handleScreenChange = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const isExpanded = e.matches;
            $html.classList.toggle('sidebar-expanded', isExpanded);
            saveState(isExpanded);
        }, 150);
    };

    /* On init */
    const savedState = localStorage.getItem(STORAGE_KEY);

    if (savedState !== null) {
        /* if local storage has value */
        const shouldExpand = savedState === 'true';
        $html.classList.toggle('sidebar-expanded', shouldExpand);
    } else {
        /* if local storage is empty (first timer) make sidebar open/closed based on condition */
        if (mediaQuery.matches) {
            $html.classList.add('sidebar-expanded');
            saveState(true);
        }
    }


    /* Screen size change */
    mediaQuery.addEventListener("change", handleScreenChange);

    /* Button click */
    document.addEventListener('click', (event) => {
        const toggler = event.target.closest('.sidebar-toggler');
        if (!toggler) {
            return;
        }

        event.preventDefault();
        const isNowExpanded = $html.classList.toggle('sidebar-expanded');

        saveState(isNowExpanded);
    });
};
