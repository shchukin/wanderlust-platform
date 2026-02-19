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
            const $chatBody = document.querySelector('.messaging-window');
            if ($dropdown && $chatBody && $currentMessage.classList.contains('message--actions-expanded')) {
                const dropdownRect = $dropdown.getBoundingClientRect();
                const chatBodyRect = $chatBody.getBoundingClientRect();
                if (dropdownRect.bottom >= chatBodyRect.bottom) {
                    $dropdown.style.top = 'auto';
                    $dropdown.style.bottom = 'calc(100% + 2px)';
                } else {
                    $dropdown.style.top = '';
                    $dropdown.style.bottom = '';
                }
            }
            return;
        }

        /* Normally there would be .menu__close button, and let's keep this piece of code for compatibility (although that button looks a bit too heavy for a small message and currently removed from DOM) */
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
