export default class popupOpener {
  constructor(element) {
    this.element = element;
    const popup = document.querySelector('[data-role=popup]');
    const popupClose = document.querySelector('[data-role=popup-close]');
    const popupOpen = document.querySelector('[data-role=popup-open]');

    popupOpen.addEventListener('click', () => {
      popup.classList.remove('disable');
      popup.classList.add('active');
    });

    popupClose.addEventListener('click', () => {
      popup.classList.remove('active');
      popup.classList.add('disable');
    });
  }
}
