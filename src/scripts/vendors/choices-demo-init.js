import Choices from 'https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js/+esm';

document.addEventListener('DOMContentLoaded', () => {

    // В некоторых версиях CDN импорт может потребовать: 
    // const ChoicesLib = Choices.default || Choices;
    // Но обычно в +esm варианте работает напрямую.

    // Single Select
    const singleSelects = document.querySelectorAll('.js-choices-single');
    singleSelects.forEach(el => {
        new Choices(el, {
            searchEnabled: true,
            itemSelectText: '',
            allowHTML: true, // В новых версиях Choices это обязательно для рендеринга
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
            allowHTML: true,
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
            allowHTML: true,
            placeholder: true,
            placeholderValue: el.getAttribute('placeholder') || 'Add tags',
        });
    });
});
