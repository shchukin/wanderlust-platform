export const scrollable = () => {
    const $scrollablesAll = document.querySelectorAll('.scrollable');

    $scrollablesAll.forEach(scrollable => {
        const $prev = scrollable.querySelector('.scrollable__action--prev');
        const $next = scrollable.querySelector('.scrollable__action--next');
        const $body = scrollable.querySelector('.scrollable__body');
        const $ribbon = scrollable.querySelector('.scrollable__ribbon');

        const onPrev = () => {
            $body.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        };

        const onNext = () => {
            $body.scrollTo({
                left: $body.scrollWidth,
                behavior: 'smooth'
            });
        };

        const update = () => {
            const isScrollable = $ribbon.offsetWidth > $body.offsetWidth + 10; /* 10px is some sort of threshold. Don't init if there is no real need for that */

            if (isScrollable) {
                if (!scrollable.classList.contains('scrollable--initialized')) {
                    scrollable.classList.add('scrollable--initialized');
                    $prev.addEventListener('click', onPrev);
                    $next.addEventListener('click', onNext);
                }
                return;
            }

            if (scrollable.classList.contains('scrollable--initialized')) {
                scrollable.classList.remove('scrollable--initialized');
                $prev.removeEventListener('click', onPrev);
                $next.removeEventListener('click', onNext);
            }
        };

        update();
        window.addEventListener('resize', update);
    });
};
