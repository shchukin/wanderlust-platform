export const soundtrack = () => {
    const radioButtons = document.querySelectorAll('[name="soundtrack-source"]');

    radioButtons.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            if (event.target.checked) {
                // Определяем ref для таба на основе значения радиокнопки
                const isOwnSoundtrack = event.target.closest('.checkboxes-menu__item').querySelector('.choice__label').textContent.trim() === 'I will provide the soundtrack';
                const tabRef = isOwnSoundtrack ? 'own-soundtrack' : 'wanderlust-soundtrack';

                // Находим соответствующий таб
                const targetTab = document.querySelector(`[data-soundtrack-tab-ref="${tabRef}"]`);

                if (targetTab) {
                    // Убираем класс current со всех табов
                    document.querySelectorAll('.soundtrack__tab').forEach((tab) => {
                        tab.classList.remove('soundtrack__tab--current');
                    });

                    // Добавляем класс current к нужному табу
                    targetTab.classList.add('soundtrack__tab--current');
                }
            }
        });
    });
};
