export const copy = () => {
    const copyContainers = document.querySelectorAll('.copy');

    copyContainers.forEach(container => {
        const $button = container.querySelector('.copy .icon-action');
        const $bubble = container.querySelector('.copy__bubble');
        const textToCopy = container.dataset.value;

        if (!$button || !$bubble || !textToCopy) return;

        $button.addEventListener('click', () => {

            navigator.clipboard.writeText(textToCopy).then(() => {

                container.classList.add('copy--bubble-is-shown');

                setTimeout(() => {
                    container.classList.remove('copy--bubble-is-shown');
                }, 1500);
            }).catch(err => {
                alert('Unexpected error occurred. Please copy manually' + err);
            });
        });
    });
};
