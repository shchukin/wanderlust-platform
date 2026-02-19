export const message = () => {

    /* Toggle message dropdown */
    document.addEventListener('click', (event) => {
        if (event.target.closest('.message__show-actions')) {
            event.preventDefault();
            const $currentMessage = event.target.closest('.message');
            const $expandedMessages = document.querySelectorAll('.message--actions-expanded');

            /* Close all other dropdowns */
            $expandedMessages.forEach((message) => {
                if (message !== $currentMessage) {
                    message.classList.remove('message--actions-expanded');
                }
            });

            $currentMessage.classList.toggle('message--actions-expanded');

            /* If it's too close to the bottom of scrolling area, output it to the top. Otherwise it will be cut. */
            const $dropdown = $currentMessage.querySelector('.message__dropdown');
            const $chatBody = document.querySelector('.messaging-window__body');

            if ($dropdown && $chatBody && $currentMessage.classList.contains('message--actions-expanded')) {
                $dropdown.style.top = '';
                $dropdown.style.bottom = '';
                const dropdownRect = $dropdown.getBoundingClientRect();
                const chatBodyRect = $chatBody.getBoundingClientRect();
                if (dropdownRect.bottom > chatBodyRect.bottom) {
                    $dropdown.style.top = 'auto';
                    $dropdown.style.bottom = 'calc(100% + 2px)';
                }
            }
            return;
        }

        /* Normally, there would be .menu__close button, and let's keep this piece of code for compatibility.
         * Although that button looks a bit too heavy for a small message and currently removed from DOM).
         * Also we try ro keep that menu smaller so it not overlaps outside of the scrollable area
         */
        if (event.target.closest('.message__dropdown .menu__close .button')) {
            event.preventDefault();
            event.target.closest('.message').classList.remove('message--actions-expanded');
            return;
        }

        /* Close by clicking outside */
        if (!event.target.closest('.message__actions')) {
            const $message = document.querySelector('.message--actions-expanded');
            $message?.classList.remove('message--actions-expanded');
        }
    });

    /* Close by Esc */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const $message = document.querySelectorAll('.message--actions-expanded');
            $message.forEach((message) => {
                message.classList.remove('message--actions-expanded');
            });
        }
    });
};
