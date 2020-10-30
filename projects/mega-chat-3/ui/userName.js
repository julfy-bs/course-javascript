export default class UserName {
  constructor(element) {
    this.element = element;
  }

  // Присваивание имени пользователя, которое он ввёл при login'е.
  set(name) {
    this.name = name;
    this.element.textContent = `${name.surname} ${name.name}`;
  }

  // Возвращение никнейма пользователя, которое он ввёл при login'е.
  // Используется для присваивания уникального имени фотографиям.
  get() {
    return this.name.nickname;
  }
}
