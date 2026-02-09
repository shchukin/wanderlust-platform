export const message = () => {

    /* Toggle message dropdown */
    document.addEventListener('click', (event) => {
        if (event.target.closest('.message__show-actions')) {
            event.preventDefault();
            const $currentMessage = event.target.closest('.message');
            const $expandedMessages = document.querySelectorAll('.message--actions-expanded');
            $expandedMessages.forEach((message) => {
                if (message !== $currentMessage) {
                    message.classList.remove('message--actions-expanded');
                }
            });
            $currentMessage.classList.toggle('message--actions-expanded');
            return;
        }

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
