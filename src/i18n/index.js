import i18n from 'i18next-client';
const resources = {
  ru: {
    translation: {
      header: {
        charity: 'благотворительный',
        auction: 'аукцион',
        introText: 'Мы редко задумываемся о том, что являемся частью биосферы нашего дома-планеты Земля. Предлагаем Вам сегодня помочь сохранению на Земле прекрасных животных – тигров и леопардов. На Дальнем Востоке сохранилось около 540 особей амурских тигров и около 70 особей дальневосточных леопардов. Купите понравившийся лот аукциона. Помогите грациозным диким кошкам сохраниться на Земле.',
        introAuthor: 'Заместитель председателя Правительства Российской Федерации – полномочный представитель Президента Российской Федерации в Дальневосточном федеральном округе Юрий Трутнев'
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
        auction: 'auction',
        introText: 'We rarely think that we are part of the biosphere of our home-planet Earth. We offer you today to help preserve the world of wonderful animals - tigers and leopards. In the Far East it remained about 540 species of Amur tigers and 70 leopards individuals. Buy desired item auction. Help graceful wild cats survive on Earth.',
        introAuthor: 'Deputy Chairman of the Government of the Russian Federation - Plenipotentiary Representative of RF President in the Far Eastern Federal District Yuri Trutnev'
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
