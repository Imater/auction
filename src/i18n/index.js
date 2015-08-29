import i18n from 'i18next-client';
const resources = {
  ru: {
    translation: {
      header: {
        charity: 'благотворительный',
        auction: 'аукцион'
      },
      login: {
        email: 'электронная почта',
        password: 'пароль',
        login: 'вход'
      }
    }
  },
  eng: {
    translation: {
      header: {
        charity: 'charity',
        auction: 'auction'
      },
      login: {
        email: 'email',
        password: 'password',
        login: 'login'
      }
    }
  }
};
i18n.init({
  lng: 'ru',
  resStore: resources,
  debug: true,
  getAsync: false
});
