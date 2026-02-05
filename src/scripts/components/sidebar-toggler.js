export const sidebarToggler = () => {
    const $html = document.documentElement;

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.sidebar-toggler')) return;
        event.preventDefault();
        $html.classList.toggle('sidebar-expanded');
    });
};
