export const bubble = () => {


    /* Show bubble on touch devices (desktop hovers done via CSS): */
    document.querySelectorAll('.bubble-handler').forEach(handler => {

        handler.addEventListener('click', function () {
            const context = this.closest('.bubble-context');
            const target = context ? context.querySelector('.bubble') : null;

            if (!target) {
                return;
            }

            /* close all the others */
            document.querySelectorAll('.bubble--visible').forEach(openBubble => {
                if (openBubble !== target) {
                    openBubble.classList.remove('bubble--visible');
                }
            });

            target.classList.toggle('bubble--visible');
        });
    });


    document.addEventListener('click', function (event) {
        if (!event.target.closest('.bubble, .bubble-handler')) {
            document.querySelectorAll('.bubble--visible').forEach(bubble => {
                bubble.classList.remove('bubble--visible');
            });
        }
    });

    document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.bubble--visible').forEach(bubble => {
                bubble.classList.remove('bubble--visible');
            });
        }
    });



    /* check if bubble is clipped by browser's edge */
    const containerPadding = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--container-padding'));
    console.log(containerPadding);

    function adjustBubblePosition() {
        const bubbles = document.querySelectorAll('.bubble');

        /* reset previous measurements */
        bubbles.forEach(bubble => {
            bubble.style.marginRight = '0px';
            const chevron = bubble.querySelector('.bubble__chevron');
            if (chevron) {
                chevron.style.left = '0px';
                chevron.style.right = '0px';
            }
        });

        requestAnimationFrame(() => {
            bubbles.forEach(bubble => {
                const chevron = bubble.querySelector('.bubble__chevron');
                const rect = bubble.getBoundingClientRect();
                const windowWidth = window.innerWidth;

                /* if clipped on the left side */
                if (rect.left < 0) {
                    const shiftDistance = rect.left - (containerPadding / 2);
                    bubble.style.marginRight = `${shiftDistance}px`;
                    if (chevron) {
                        chevron.style.left = `${shiftDistance * 2}px`;
                    }
                }

                /* if clipped on the right side */
                else if (rect.right > windowWidth) {
                    const shiftDistance = rect.right - windowWidth + (containerPadding / 2);
                    bubble.style.marginRight = `${shiftDistance}px`;
                    if (chevron) {
                        chevron.style.right = `${-1 * shiftDistance * 2}px`;
                    }
                }
            });
        });
    }

    adjustBubblePosition();
    window.addEventListener('resize', adjustBubblePosition);
    window.addEventListener('load', adjustBubblePosition);
};
