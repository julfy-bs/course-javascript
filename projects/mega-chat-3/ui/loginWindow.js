export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const loginSurnameInput = element.querySelector('[data-role=login-surname-input]');
    const loginNicknameInput = element.querySelector('[data-role=login-nickname-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');
    const loginError = element.querySelector('[data-role=login-error]');

    submitButton.addEventListener('click', () => {
      loginError.textContent = '';
      const surname = loginSurnameInput.value.trim();
      const name = loginNameInput.value.trim();
      const nickname = loginNicknameInput.value.trim();
      const userNicknameData = {
        surname: surname,
        name: name,
        nickname: nickname,
      };
      // userNicknameData.push(surname);
      // userNicknameData.push(name);
      // userNicknameData.push(`@${nickname}`);
      // const array = userNicknameData.join(' ');
      if (!surname) {
        loginError.textContent = 'Введите фамилию';
      } else if (!name) {
        loginError.textContent = 'Введите имя';
      } else if (!nickname) {
        loginError.textContent = 'Введите никнейм';
      } else {
        this.onLogin(userNicknameData);
        console.log(userNicknameData);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
