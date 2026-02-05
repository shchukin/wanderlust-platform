export const input = () => {


    /* Input error */

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
        $element.addEventListener('change', () => {
            selectPlaceholder($element);
        });
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
        $element.addEventListener('input', () => {
            expandTextarea($element);
        });
    });


    /* Toggle password visibility */

    document.addEventListener('click', (event) => {
        const $inputShowPassword = event.target.closest('.input__show-password');
        if (!$inputShowPassword) {
            return;
        }
        const $input = $inputShowPassword.closest('.input');
        const $widget = $input.querySelector('.input__widget');
        const isVisible = $input.classList.toggle('input--password-is-visible');
        if ($widget.type === 'password' || $widget.type === 'text') {
            $widget.type = isVisible ? 'text' : 'password';
        }
    });
};
