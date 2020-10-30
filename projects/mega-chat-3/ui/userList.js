export default class UserList {
  constructor(element) {
    this.element = element;
    this.items = new Set();
  }

  buildDOM() {
    const fragment = document.createDocumentFragment();

    this.element.innerHTML = '';

    for (const name of this.items) {
      // Подсчет количества участников чата
      // console.log(this.items.size);
      const quantityUsers = document.querySelector('.right-side-header-bottom-number');
      quantityUsers.textContent = this.items.size;

      // Присваивание переменным значений из объекта с данными Login'а
      const userSurname = name.surname;
      const userName = name.name;
      const userNickname = name.nickname;

      // Создание компонентов списка участников чата
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

      // Присваивание класса компонентам списка участников чата
      element.classList.add('user-list-item');
      wrapper.classList.add('user-list-item__wrapper');
      left.classList.add('user-list-item__left');
      image.style.backgroundImage = `url(/mega-chat-3/photos/${userNickname}.png?t=${Date.now()})`;
      right.classList.add('user-list-item__right');
      header.classList.add('user-list-item__header');
      headerTop.classList.add('user-list-item__header-top');
      headerBottom.classList.add('user-list-item__header-bottom');
      userSurnamePlaceholder.classList.add('user-list-item__header-top-surname');
      userNamePlaceholder.classList.add('user-list-item__header-top-name');
      userNicknamePlaceholder.classList.add('user-list-item__header-bottom-nickname');
      content.classList.add('user-list-item__content');
      image.classList.add('user-list-item__image');

      // Присваивание атрибутов компонентам списка участников чата
      image.dataset.role = 'user-avatar';
      image.dataset.user = `${userNickname}`;

      // Присваивание контента компонентам списка участников чата из объекта с данными Login'а
      userSurnamePlaceholder.textContent = userSurname;
      userNamePlaceholder.textContent = userName;
      userNicknamePlaceholder.textContent = userNickname;

      // Создание структуры компонентов списка участников в DOM-дерево
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

    // Внедрение компонентов списка участников в DOM-дерево
    this.element.append(fragment);
  }

  // name - {Объект с данными инпута из окна регистрации}
  // name - {surname: "test", name: "test", nickname: "test"}

  add(name) {
    this.items.add(name);
    this.buildDOM();
  }

  remove(name) {
    this.items.delete(name);
    this.buildDOM();
  }
}
