export const scrollable = () => {
    const $scrollablesAll = document.querySelectorAll('.scrollable');

    $scrollablesAll.forEach(scrollable => {
        const prev = scrollable.querySelector('.scrollable__action--prev');
        const next = scrollable.querySelector('.scrollable__action--next');
        const body = scrollable.querySelector('.scrollable__body');
        const ribbon = scrollable.querySelector('.scrollable__ribbon');

        const isScrollable = ribbon.offsetWidth > body.offsetWidth + 10; /* 10px is some sort of threshold. Don't init if there is no real need for that */

        if (!isScrollable) {
            return;
        }

        scrollable.classList.add('scrollable--initialized');

        prev.addEventListener('click', () => {
            body.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        });

        next.addEventListener('click', () => {
            body.scrollTo({
                left: body.scrollWidth,
                behavior: 'smooth'
            });
        });

    });
};
