export default class MainWindow {
  constructor(element) {
    this.element = element;
  }

  // Показать окно main.
  show() {
    this.element.classList.remove('hidden');
  }

  // Спрятать окно main.
  hide() {
    this.element.classList.add('hidden');
  }
}
