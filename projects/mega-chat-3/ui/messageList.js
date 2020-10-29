import { sanitize } from '../utils';

export default class MessageList {
  constructor(element) {
    this.element = element;
  }

  add(from, text) {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const time = `${hours}:${minutes}`;
    const item = document.createElement('div');

    const arrayUserInfo = from.split(' ');
    const userSurname = arrayUserInfo[0];
    const userName = arrayUserInfo[1];
    const userNickname = arrayUserInfo[2];

    item.classList.add('message-item');
    item.innerHTML = `
    <div class="message-item-left">
        <div
        style="background-image: url(/mega-chat-3/photos/${from}.png?t=${Date.now()})" 
        class="message-item-photo" data-role="user-avatar" data-user=${sanitize(
          from
        )}></div>
    </div>
    <div class="message-item-right">
      <div class="message-item-header">
          <span class="message-item-header-surname">${sanitize(userSurname)}</span>
          <span class="message-item-header-name">${sanitize(userName)}</span>
          <span class="message-item-header-nickname">${sanitize(userNickname)}</span>
          <span class="message-item-header-time">${time}</span>
      </div>
      <div class="message-item-text">${sanitize(text)}</div>
    </div>
    `;

    this.element.append(item);
    this.element.scrollTop = this.element.scrollHeight;
  }

  addSystemMessage(message) {
    const item = document.createElement('div');

    item.classList.add('message-item', 'message-item-system');
    item.textContent = message;

    this.element.append(item);
    this.element.scrollTop = this.element.scrollHeight;
  }
}
