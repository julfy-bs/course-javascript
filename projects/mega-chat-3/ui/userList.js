export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDOM() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      const arrayUserInfo = name.split(' ');
      const userSurname = arrayUserInfo[0];
      const userName = arrayUserInfo[1];
      const userNickname = arrayUserInfo[2];
      const element = document.createElement('div');
      const wrapper = document.createElement('div');
      const left = document.createElement('div');
      const image = document.createElement('div');
      const right = document.createElement('div');
      const header = document.createElement('div');
      const headerTop = document.createElement('div');
      const userSurnamePlaceholder = document.createElement('span');
      const userNamePlaceholder = document.createElement('span');
      const headerBottom = document.createElement('div');
      const userNicknamePlaceholder = document.createElement('div');
      const content = document.createElement('div');
      element.classList.add('user-list-item');
      wrapper.classList.add('user-list-item__wrapper');
      left.classList.add('user-list-item__left');
      image.classList.add('user-list-item__image');
      right.classList.add('user-list-item__right');
      header.classList.add('user-list-item__header');
      headerTop.classList.add('user-list-item__header-top');
      headerBottom.classList.add('user-list-item__header-bottom');
      userSurnamePlaceholder.classList.add('user-list-item__header-top-surname');
      userNamePlaceholder.classList.add('user-list-item__header-top-name');
      userNicknamePlaceholder.classList.add('user-list-item__header-bottom-nickname');
      content.classList.add('user-list-item__content');
      userSurnamePlaceholder.textContent = userSurname;
      userNamePlaceholder.textContent = userName;
      userNicknamePlaceholder.textContent = userNickname;

      fragment.append(element);
      element.append(wrapper);
      wrapper.append(left);
      left.append(image);
      wrapper.append(right);
      right.append(header);
      header.append(headerTop);
      header.append(headerBottom);
      headerTop.append(userSurnamePlaceholder);
      headerTop.append(userNamePlaceholder);
      headerBottom.append(userNicknamePlaceholder);
      right.append(content);
    }

    this.element.append(fragment);
  }

  add(name) {
    this.items.add(name);
    this.buildDOM();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
  }
}
