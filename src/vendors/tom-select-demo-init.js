document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.js-select');

    if (selectElement && window.TomSelect) {
        new TomSelect(selectElement, {
            create: true,
            sortField: {
                field: 'text',
                order: 'asc'
            },
            placeholder: selectElement.getAttribute('placeholder') || 'Select an option...'
        });
    }
});
