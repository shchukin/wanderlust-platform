export const range = () => {
    const ranges = document.querySelectorAll('.range');

    ranges.forEach((container) => {
        const input = container.querySelector('input[type="range"]');
        const output = container.querySelector('.range__output');

        if (!input || !output) return;

        const getSuffix = () => {
            if (output.dataset.suffix) return output.dataset.suffix;
            const raw = output.textContent || '';
            const suffix = raw.replace(/[\d.,\s]+/g, '');
            return suffix || '';
        };

        const update = () => {
            const min = input.min === '' ? 0 : Number(input.min);
            const max = input.max === '' ? 100 : Number(input.max);
            const value = Number(input.value);
            const percent = max > min ? (value - min) / (max - min) : 0;
            const suffix = getSuffix();

            output.textContent = `${value}${suffix}`;

            const inputWidth = input.getBoundingClientRect().width;
            const thumbSize = parseFloat(getComputedStyle(input)
                .getPropertyValue('--range-thumb-size')) || 18;
            const left = percent * (inputWidth - thumbSize) + (thumbSize / 2);

            output.style.left = `${left}px`;
            output.style.transform = 'translateX(-50%)';
        };

        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }

        input.addEventListener('input', update);
        window.addEventListener('resize', update);
        update();
    });
};
