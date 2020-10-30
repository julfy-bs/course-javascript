export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    // Поиск необходимых компонентов по data-role.
    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const loginSurnameInput = element.querySelector('[data-role=login-surname-input]');
    const loginNicknameInput = element.querySelector('[data-role=login-nickname-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');
    const loginError = element.querySelector('[data-role=login-error]');

    // Добавление слушателя событий на кнопку формы login - submit.
    submitButton.addEventListener('click', () => {
      loginError.textContent = '';

      // Очищаем поле input'a от ненужных пробелов
      const surname = loginSurnameInput.value.trim();
      const name = loginNameInput.value.trim();
      const nickname = loginNicknameInput.value.trim();

      // Создаём объект с данными, в котором будет хранится информация о текущем пользователе.
      const userNicknameData = {
        surname: surname,
        name: name,
        nickname: nickname,
      };

      // Добавление проверки на false значение;
      // Отображение в поле loginError ошибку валидации формы.
      if (!surname) {
        loginError.textContent = 'Введите фамилию';
      } else if (!name) {
        loginError.textContent = 'Введите имя';
      } else if (!nickname) {
        loginError.textContent = 'Введите никнейм';
      } else {
        this.onLogin(userNicknameData);
      }
    });
  }

  // Показать окно login.
  show() {
    this.element.classList.remove('hidden');
  }

  // Спрятать окно login.
  hide() {
    this.element.classList.add('hidden');
  }
}
