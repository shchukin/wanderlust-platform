export const input = () => {


     /* TO DO: this part is just a demo of how "input--error" class must be used.
     * Code a proper validation in the project and remove this part.
     */

    document.addEventListener('focusin', (event) => {
        const $input = event.target.closest('.input');
        if (!$input) return;
        if ($input.classList.contains('input--error')) {
            $input.classList.remove('input--error');
            let $sibling = $input.nextElementSibling;
            while ($sibling && $sibling.classList.contains('helper')) {
                $sibling.classList.remove('helper--error');
                $sibling.hidden = true;
                $sibling = $sibling.nextElementSibling;
            }
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


    /* Dynamic width (AI written, but looks okay) */

    const dynamicWidthMeasureMap = new WeakMap();

    const createDynamicWidthMeasure = () => {
        const $measure = document.createElement('div');
        $measure.setAttribute('aria-hidden', 'true');
        $measure.style.position = 'absolute';
        $measure.style.left = '-9999px';
        $measure.style.top = '0';
        $measure.style.visibility = 'hidden';
        $measure.style.whiteSpace = 'pre';
        $measure.style.height = 'auto';
        $measure.style.width = 'auto';
        $measure.style.padding = '0';
        $measure.style.border = '0';
        $measure.style.boxSizing = 'content-box';
        document.body.appendChild($measure);
        return $measure;
    };

    const updateDynamicWidth = ($element) => {
        const isTextInput = $element.matches('input');
        const isSelect = $element.matches('select');
        if (!isTextInput && !isSelect) {
            return;
        }

        let $measure = dynamicWidthMeasureMap.get($element);
        if (!$measure) {
            $measure = createDynamicWidthMeasure();
            dynamicWidthMeasureMap.set($element, $measure);
        }

        const computedStyles = window.getComputedStyle($element);
        $measure.style.font = computedStyles.font;
        $measure.style.letterSpacing = computedStyles.letterSpacing;
        $measure.style.textTransform = computedStyles.textTransform;

        let text = ' ';
        if (isSelect) {
            const selectedOption = $element.selectedOptions?.[0];
            text = selectedOption ? selectedOption.textContent.trim() : ' ';
        } else {
            const rawValue = $element.value;
            const placeholder = $element.getAttribute('placeholder') || '';
            text = rawValue || placeholder || ' ';
        }
        $measure.textContent = text;

        const textWidth = $measure.getBoundingClientRect().width;
        const paddingLeft = parseFloat(computedStyles.paddingLeft) || 0;
        const paddingRight = parseFloat(computedStyles.paddingRight) || 0;
        const borderLeft = parseFloat(computedStyles.borderLeftWidth) || 0;
        const borderRight = parseFloat(computedStyles.borderRightWidth) || 0;

        const width = Math.ceil(textWidth + paddingLeft + paddingRight + borderLeft + borderRight);
        $element.style.width = `${width}px`;
    };

    const initDynamicWidth = () => {
        document.querySelectorAll('.input--dynamic-width .input__widget').forEach(($element) => {
            updateDynamicWidth($element);
        });
    };

    initDynamicWidth();

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initDynamicWidth();
        });
    }

    document.addEventListener('input', (event) => {
        const $inputWidget = event.target.closest('.input--dynamic-width .input__widget');
        if (!$inputWidget || $inputWidget.matches('select')) return; /* not a select */
        updateDynamicWidth($inputWidget);
    });

    document.addEventListener('change', (event) => {
        const $inputWidgetSelect = event.target.closest('.input--dynamic-width select.input__widget'); /* select only */
        if (!$inputWidgetSelect) return;
        updateDynamicWidth($inputWidgetSelect);
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
