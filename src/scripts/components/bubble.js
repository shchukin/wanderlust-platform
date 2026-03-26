export const bubble = () => {


    /* Показ (тап на смартфонах) */
    document.querySelectorAll('.bubble-handler').forEach(handler => {

        handler.addEventListener('click', function () {
            const context = this.closest('.bubble-context');
            const target = context ? context.querySelector('.bubble') : null;

            if (!target) {
                return;
            }

            // Закрываем все остальные открытые баблы
            document.querySelectorAll('.bubble--visible').forEach(openBubble => {
                if (openBubble !== target) {
                    openBubble.classList.remove('bubble--visible');
                }
            });

            target.classList.toggle('bubble--visible');
        });
    });

// Клик вне бабла
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.bubble, .bubble-handler')) {
            document.querySelectorAll('.bubble--visible').forEach(bubble => {
                bubble.classList.remove('bubble--visible');
            });
        }
    });

// Закрытие по Escape
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.bubble--visible').forEach(bubble => {
                bubble.classList.remove('bubble--visible');
            });
        }
    });

    /* Проверяем не обрезаются ли баблы краем экрана */
    const containerPadding = 20; // Убедитесь, что переменная определена

    function adjustBubblePosition() {
        const bubbles = document.querySelectorAll('.bubble');

        // Сбрасываем предыдущие замеры
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

                // Выходит ли за левый край
                if (rect.left < 0) {
                    const shiftDistance = rect.left - (containerPadding / 2);
                    bubble.style.marginRight = `${shiftDistance}px`;
                    if (chevron) {
                        chevron.style.left = `${shiftDistance * 2}px`;
                    }
                }
                // Выходит ли за правый край
                else if (rect.right > windowWidth) {
                    const shiftDistance = rect.right - windowWidth + (containerPadding / 2);
                    bubble.style.marginRight = `${shiftDistance}px`;
                    if (chevron) {
                        chevron.style.right = `${-1 * shiftDistance * 2}px`;
                    }
                }
                // Сброс (уже выполнен выше, но для чистоты логики)
                else {
                    bubble.style.marginRight = '0px';
                    if (chevron) {
                        chevron.style.right = '0px';
                        chevron.style.left = '0px';
                    }
                }
            });
        });
    }

// Инициализация и обработчики событий
    adjustBubblePosition();
    window.addEventListener('resize', adjustBubblePosition);
    window.addEventListener('load', adjustBubblePosition);
};
