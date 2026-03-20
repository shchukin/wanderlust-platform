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

    const popupShow = (popup) => {
        lockPage();
        if (popup) {
            popup.classList.add('popup--visible');
            popup.scrollTop = 0;
        }
    };

    const popupHide = (popup) => {
        if (!popup) { // in case of Esc or something
            popup = document.querySelectorAll('.popup');
        }

        const hideOne = (element) => {
            if (!element) return;
            element.classList.remove('popup--visible');
            unlockPage();
        };

        if (popup instanceof NodeList || Array.isArray(popup)) {
            popup.forEach((item) => hideOne(item));
            return;
        }

        hideOne(popup);
    };

    /* show popup by handler click */

    document.querySelectorAll('[data-popup-handler]').forEach((handler) => {
        handler.addEventListener('click', (event) => {
            event.preventDefault();
            const selector = handler.getAttribute('data-popup-handler');
            const targetPopup = selector ? document.querySelector(selector) : null;
            if (targetPopup) {
                popupShow(targetPopup);
            }
        });
    });


    /* hide popup by window close click */

    document.querySelectorAll('[data-close-popup]').forEach((closeButton) => {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            const parentPopup = closeButton.closest('.popup');
            if (parentPopup) {
                popupHide(parentPopup);
            }
        });
    });


    /* hide popup by overlay click */

    document.querySelectorAll('.popup').forEach((popupEl) => {
        popupEl.addEventListener('click', (event) => {
            if (!event.target.closest('.popup__slot')) {
                popupHide(document.querySelectorAll('.popup'));
            }
        });
    });


    /* hide popup by Esc press */

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            popupHide();
        }
    });

};
