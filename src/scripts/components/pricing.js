export const pricing = () => {

    document.addEventListener('click', (event) => {

        if (event.target.closest('.pricing__handler')) {
            event.preventDefault();
            const $currentDropdown = event.target.closest('.pricing__item');
            $currentDropdown.classList.toggle('pricing__item--expanded');
        }
    });

};
