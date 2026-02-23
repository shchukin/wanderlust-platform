document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.js-select');
    if (!selectElement || !window.TomSelect) return;

    new window.TomSelect(selectElement, {
        create: true
    });
});
