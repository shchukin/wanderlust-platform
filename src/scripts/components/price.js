export const price = () => {

    document.addEventListener('click', (event) => {

        if (event.target.closest('.price__handler')) {
            event.preventDefault();
            const $currentDropdown = event.target.closest('.price');
            $currentDropdown.classList.toggle('price-expanded');
        }
    });

};
