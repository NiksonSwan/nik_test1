document.addEventListener("DOMContentLoaded", () => {
    const btnOne = document.getElementById("btnOne");
    const btnTwo = document.getElementById("btnTwo");
    const btnThree = document.getElementById("btnThree");
    const btnFour = document.getElementById("btnFour");
  
    // Пример отправки события в Google Analytics при клике
    btnOne.addEventListener("click", () => {
      gtag('event', 'click_button', {
        'event_category': 'Interaction',
        'event_label': 'Button 1'
      });
      alert("Нажата Кнопка 1");
    });
  
    btnTwo.addEventListener("click", () => {
      gtag('event', 'click_button', {
        'event_category': 'Interaction',
        'event_label': 'Button 2'
      });
      alert("Нажата Кнопка 2");
    });
  
    btnThree.addEventListener("click", () => {
      gtag('event', 'click_button', {
        'event_category': 'Interaction',
        'event_label': 'Button 3'
      });
      alert("Нажата Кнопка 3");
    });
  
    btnFour.addEventListener("click", () => {
      gtag('event', 'click_button', {
        'event_category': 'Interaction',
        'event_label': 'Button 4'
      });
      alert("Нажата Кнопка 4");
    });
  });
  