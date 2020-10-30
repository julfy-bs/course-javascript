export default class UserName {
  constructor(element) {
    this.element = element;
  }

  set(name) {
    this.name = name;
    this.element.textContent = `${name.surname} ${name.name}`;
  }

  get() {
    return this.name.nickname;
  }
}
