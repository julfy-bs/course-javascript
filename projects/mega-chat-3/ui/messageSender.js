export default class MessageSender {
  constructor(element, onSend) {
    this.onSend = onSend;
    this.messageInput = element.querySelector('[data-role=message-input]');
    this.messageSendButton = element.querySelector('[data-role=message-send-button]');

    // Удаление лишних пробелов в input'е.
    this.messageSendButton.addEventListener('click', () => {
      const message = this.messageInput.value.trim();

      if (message) {
        this.onSend(message);
      }
    });

    // Добавление слушателя события на Input сообщения;
    // 13 - enter;
    this.messageInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        const message = this.messageInput.value.trim();

        if (message) {
          this.onSend(message);
        }
      }
    });
  }

  // Очищение текстового поля Input'а;
  clear() {
    this.messageInput.value = '';
  }
}
