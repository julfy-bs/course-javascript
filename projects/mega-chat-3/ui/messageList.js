export default class MessageList {
  constructor(element) {
    this.element = element;
  }

  add(from, text) {
    // Отображение текущего времени в формате hh:mm
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const time = `${hours}:${minutes}`;
    const item = document.createElement('div');

    // Присвоение переменным значения из объекта с данными, в котором хранится информация о текущем пользователе.
    const userSurname = from.surname;
    const userName = from.name;
    const userNickname = from.nickname;

    // Создание html-структуры тела сообщений
    item.classList.add('message-item');
    item.innerHTML = `
    <div class="message-item-left">
        <div
        style="background-image: url(/mega-chat-3/photos/${userNickname}.png?t=${Date.now()})" 
        class="message-item-photo" data-role="user-avatar" data-user=${userNickname}></div>
    </div>
    <div class="message-item-right">
        <div class="message-item-right-content">
            <div class="message-item-header">
                <span class="message-item-header-surname">${userSurname}</span>
                <span class="message-item-header-name">${userName}</span>
                <span class="message-item-header-nickname">${userNickname}</span>
                <span class="message-item-header-time">${time}</span>
            </div>
            <div class="message-item-text">${text}</div>
        </div>
    </div>
    `;

    // Добавление html-структуры тела сообщений в DOM-дерево;
    // Добавление скролла вниз.
    this.element.append(item);
    this.element.scrollTop = this.element.scrollHeight;
  }

  // Добавление
  addSystemMessage(message) {
    const item = document.createElement('div');

    item.classList.add('message-item', 'message-item-system');
    item.textContent = message;

    this.element.append(item);
    this.element.scrollTop = this.element.scrollHeight;
  }
}
