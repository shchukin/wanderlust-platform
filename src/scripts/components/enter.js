export const enter = () => {

    /* Expanding textarea */

    const expandTextarea = ($element) => {
        $element.style.height = 'auto';
        const computedStyles = window.getComputedStyle($element);
        const borderWidth = parseInt(computedStyles.borderWidth, 10) || 0;
        $element.style.height = `${$element.scrollHeight + 2 * borderWidth}px`;
    };

    document.querySelectorAll('.enter__input').forEach(($element) => {
        expandTextarea($element);
        $element.addEventListener('input', () => {
            expandTextarea($element);
        });
    });
};
