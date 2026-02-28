document.addEventListener('DOMContentLoaded', () => {
    // Single Select
    const singleSelects = document.querySelectorAll('.js-choices-single');
    singleSelects.forEach(el => {
        new Choices(el, {
            searchEnabled: true,
            itemSelectText: '',
            placeholder: true,
            placeholderValue: el.getAttribute('placeholder') || 'Select an option',
        });
    });

    // Multi Select
    const multiSelects = document.querySelectorAll('.js-choices-multi');
    multiSelects.forEach(el => {
        new Choices(el, {
            removeItemButton: true,
            maxItemCount: 3,
            itemSelectText: '',
            placeholder: true,
            placeholderValue: el.getAttribute('placeholder') || 'Pick up to 3 options',
        });
    });

    // Tags
    const tagSelects = document.querySelectorAll('.js-choices-tags');
    tagSelects.forEach(el => {
        new Choices(el, {
            removeItemButton: true,
            addChoices: true,
            addItems: true,
            placeholder: true,
            placeholderValue: el.getAttribute('placeholder') || 'Add tags',
        });
    });
});
