export default class popupOpener {
  constructor(element) {
    this.element = element;

    // Поиск необходимых компонентов по data-role.
    const popup = document.querySelector('[data-role=popup]');
    const popupClose = document.querySelector('[data-role=popup-close]');
    const popupOpen = document.querySelector('[data-role=popup-open]');

    // Добавление слушателя для ОТКРЫТИЯ оверлея с возможностью замены фотографии
    popupOpen.addEventListener('click', () => {
      popup.classList.remove('disable');
      popup.classList.add('active');
    });

    // Добавление слушателя для ЗАКРЫТИЯ оверлея с возможностью замены фотографии
    popupClose.addEventListener('click', () => {
      popup.classList.remove('active');
      popup.classList.add('disable');
    });
  }
}
