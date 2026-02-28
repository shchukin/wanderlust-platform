document.addEventListener('DOMContentLoaded', () => {
    if (!window.TomSelect) {
        return;
    }

    document.querySelectorAll('.js-select-multi').forEach((selectElement) => {
        new TomSelect(selectElement, {
            hidePlaceholder: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: selectElement.getAttribute('placeholder') || 'Pick up to 3 options'
        });
    });

    document.querySelectorAll('.js-select-multi-static').forEach((selectElement) => {
        new TomSelect(selectElement, {
            allowEmptyOption: true,
            create: false,
            maxItems: 3,
            plugins: ['remove_button'],
            placeholder: selectElement.getAttribute('placeholder') || 'Pick up to 3 options'
        });
    });

    document.querySelectorAll('.js-select-tags').forEach((inputElement) => {
        new TomSelect(inputElement, {
            create: true,
            persist: false,
            plugins: ['remove_button'],
            placeholder: inputElement.getAttribute('placeholder') || 'Add tags'
        });
    });
});
