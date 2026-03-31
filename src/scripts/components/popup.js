import { refreshExpandableTextareas } from './input.js';

/* Originally it was a jquery piece. Rewritten to vanilla JS by AI */


export const popup = () => {

    /*
     * Page lock
     */

    let documentWidthWithScroll = 0;
    let documentWidthWithoutScroll = 0;

    const html = document.documentElement;

    const lockPage = () => {
        if (!html.classList.contains('html-lock')) {
            documentWidthWithScroll = window.innerWidth;
            html.classList.add('html-lock');
            documentWidthWithoutScroll = window.innerWidth;
            html.style.paddingRight = `${documentWidthWithoutScroll - documentWidthWithScroll}px`;
        }
    };

    const unlockPage = () => {
        if (html.classList.contains('html-lock')) {
            html.style.paddingRight = '';
            html.classList.remove('html-lock');
        }
    };



    /*
     * Popup
     */

    const popupShow = ($popup) => {
        lockPage();
        $popup.classList.add('popup--visible');
        $popup.scrollTop = 0;
        refreshExpandableTextareas($popup);
    };

    const popupHide = ($popup) => {
        if (!$popup) { // in case of Esc or something
            $popup = document.querySelectorAll('.popup');
        }

        const hideOne = (element) => {
            if (!element) return;
            element.classList.remove('popup--visible');
            unlockPage();
        };

        if ($popup instanceof NodeList || Array.isArray($popup)) {
            $popup.forEach((item) => hideOne(item));
            return;
        }

        hideOne($popup);
    };



    /* Clicks */

    document.addEventListener('click', (event) => {
        const handler = event.target.closest('[data-popup-handler]');
        if (handler) {
            event.preventDefault();
            const selector = handler.getAttribute('data-popup-handler');
            const targetPopup = selector ? document.querySelector(selector) : null;
            if (targetPopup) {
                popupShow(targetPopup);
            }
            return;
        }

        const closeButton = event.target.closest('[data-close-popup]');
        if (closeButton) {
            event.preventDefault();
            const parentPopup = closeButton.closest('.popup');
            if (parentPopup) {
                popupHide(parentPopup);
            }
            return;
        }

        const popupEl = event.target.closest('.popup');
        if (popupEl && !event.target.closest('.popup__slot')) {
            popupHide(document.querySelectorAll('.popup'));
        }
    });


    /* hide popup by Esc press */

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            popupHide();
        }
    });

};
