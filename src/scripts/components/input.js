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
        const $button = event.target.closest('.input__action .icon-action');
        if (!$button) {
            return;
        }
        const $input = $button.closest('.input');
        if (!$input) {
            return;
        }
        const $widget = $input.querySelector('.input__widget');
        if (!$widget || ($widget.type !== 'password' && $widget.type !== 'text')) {
            return;
        }
        const $icon = $button.querySelector('.icon');
        const iconName = $icon?.textContent?.trim();
        if (iconName !== 'visibility' && iconName !== 'visibility_off') {
            return;
        }
        if (iconName === 'visibility_off' && $widget.type !== 'password') {
            return;
        }
        if (iconName === 'visibility' && $widget.type !== 'text') {
            return;
        }
        const isVisible = $widget.type === 'password';
        $widget.type = isVisible ? 'text' : 'password';
        if ($icon) {
            $icon.textContent = isVisible ? 'visibility' : 'visibility_off';
        }
    });
};
