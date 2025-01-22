document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.trackable-button');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const buttonName = `Кнопка ${index + 1}`;
            console.log(`Нажата ${buttonName}`); // Для отладки в консоли

            // Отправка события в Google Analytics
            gtag('event', 'click', {
                event_category: 'Кнопки',
                event_label: buttonName,
                value: index + 1
            });
        });
    });
});
