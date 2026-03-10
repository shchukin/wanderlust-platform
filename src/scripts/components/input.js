export const input = () => {


     /* TO DO: this part is just a demo of how "input--error" class must be used.
     * Code a proper validation in the project and remove this part.
     */

    document.addEventListener('focusin', (event) => {
        const $input = event.target.closest('.input');
        if (!$input) return;
        $input.classList.remove('input--error');
        let $sibling = $input.nextElementSibling;
        while ($sibling && $sibling.classList.contains('helper')) {
            $sibling.classList.remove('helper--error');
            $sibling.hidden = true;
            $sibling = $sibling.nextElementSibling;
        }
    });


    /* Select placeholder */

    const selectPlaceholder = ($element) => {
        const $parent = $element.closest('.input');
        if (!$parent) return;
        $parent.classList.toggle('input--placeholder-is-chosen', $element.value === 'placeholder');
    };

    document.querySelectorAll('select.input__widget').forEach(($element) => {
        selectPlaceholder($element);
    });

    document.addEventListener('change', (event) => {
        const $select = event.target.closest('select.input__widget');
        if (!$select) return;
        selectPlaceholder($select);
    });


    /* Expanding textarea */

    const expandTextarea = ($element) => {
        $element.style.height = 'auto';
        const computedStyles = window.getComputedStyle($element);
        const borderWidth = parseInt(computedStyles.borderWidth, 10) || 0;
        $element.style.height = `${$element.scrollHeight + 2 * borderWidth}px`;
    };

    document.querySelectorAll('.input--expandable .input__widget').forEach(($element) => {
        expandTextarea($element);
    });

    document.addEventListener('input', (event) => {
        const $textarea = event.target.closest('.input--expandable .input__widget');
        if (!$textarea) return;
        expandTextarea($textarea);
    });



    /* Toggle password visibility */

    document.addEventListener('click', (event) => {
        const $eyeButton = event.target.closest('.input__action .icon-action');
        if (!$eyeButton) {
            return;
        }

        const $icon = $eyeButton.querySelector('.icon');

        /* Check if we work with input that contains eye button */
        const iconName = $icon?.textContent?.trim();
        if (!$icon || (iconName !== 'visibility' && iconName !== 'visibility_off')) {
            return;
        }

        const $widget = $eyeButton.closest('.input').querySelector('.input__widget');

        const isVisible = $widget.type === 'password';

        $widget.type = isVisible ? 'text' : 'password';
        $icon.textContent = isVisible ? 'visibility' : 'visibility_off';
    });
};
