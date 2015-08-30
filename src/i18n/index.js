import i18n from 'i18next-client';
const resources = {
  ru: {
    translation: {
      header: {
        charity: 'БЛАГОТВОРИТЕЛЬНЫЙ',
        auction: 'Аукцион',
        introText: 'Мы редко задумываемся о том, что являемся частью биосферы нашего дома-планеты Земля. Предлагаем Вам сегодня помочь сохранению на Земле прекрасных животных – тигров и леопардов. На Дальнем Востоке сохранилось около 540 особей амурских тигров и около 70 особей дальневосточных леопардов. Купите понравившийся лот аукциона. Помогите грациозным диким кошкам сохраниться на Земле.',
        introAuthor: 'Заместитель председателя Правительства Российской Федерации – полномочный представитель Президента Российской Федерации в Дальневосточном федеральном округе Юрий Трутнев',
        about1: 'В ПОДДЕРЖКУ ИСЧЕЗАЮЩИХ И РЕДКИХ',
        about2: 'ВИДОВ ЖИВОТНЫХ ДАЛЬНЕГО ВОСТОКА'
      },
      login: {
        email: 'электронная почта',
        password: 'пароль',
        login: 'вход',
        loginText: 'ВХОД',
        regText: 'РЕГИСТРАЦИЯ'
      },
      lot: {
        all: 'ВСЕ ЛОТЫ',
        active: 'ТОЛЬКО АКТИВНЫЕ'
      },
      footer: {
        phones: 'Телефоны',
        addressHeader: 'Адрес',
        address: '123022, г.Москва, ул.Красная Пресня, д.24',
        socialHeader: 'Социальные сети',
        header: 'Информация об аукционе',
        line1: 'Благотворительный аукцион в поддержку проектов по защите исчезающих и редких видов животных Дальнего Востока проводится по инициативе Заместителя председателя Президента Российской Федерации в Дальневосточном федеральном округе Юрия Петровича Трутнева и Минприроды России.',
        line2: 'Цель аукциона – сбор средств на реализацию проектов по защите редких видов животных – амурских тигров и дальневосточных леопардов.',
        line3: 'Аукцион будет проходить в течение всего периода работы Восточного экономического форума на интерактивной выставке "Дикая природа Дальнего Востока" – специальном стенде Минприроды России. Аукционистом на выставке выступит лично Юрий Петрович Трутнев. Планируется продажа уникальных ювелирных изделий, произведений искусства из регионов Дальнего Востока.',
        line4: 'Кроме того, аукцион пройдет 3 сентября в рамках благотворительного вечера компании "Русгидро". В кчестве лотов будут выставлены спасательный буек с автографом супермадели и защитницы природы Памелы Андерсон, танес с супермоделью, произведения искусства, именные сертификаты попечителя редких видов животных Дальнего Востока.',
        line5: 'Также участие в аукционе будет проходить на специальном сайте, где участникам форума будут представлены ценные предметы искусства и изделия ручной работы с особо охраняемых природных терриротий.',
        line6: 'Участниками благотворительного аукциона станут руководители и топ-менеджеры крупнейших российских и международных компаний, ведущие научные эксперты, представители федеральных и региональных органов власти.',
        line7: 'Участие в благотворительном аукционе – лучшее доказательство ведения успешного и социально ответственного бизнеса, рассчитанного надлительную перспективу, пример неравнодушия к делу охраны редких и исчезающих видов животных!',
        line8: 'Все собранные средства пойдут на реализацию природоохранных проектов в АНО "амурский тигр" и АНО "дальневосточный леопард".',
        from: 'Восточный Экономический Форум 2015'
      }
    }
  },
  eng: {
    translation: {
      header: {
        charity: 'CHARITY',
        auction: 'Auction',
        introText: 'We rarely think that we are part of the biosphere of our home-planet Earth. We offer you today to help preserve the world of wonderful animals - tigers and leopards. In the Far East it remained about 540 species of Amur tigers and 70 leopards individuals. Buy desired item auction. Help graceful wild cats survive on Earth.',
        introAuthor: 'Deputy Chairman of the Government of the Russian Federation - Plenipotentiary Representative of RF President in the Far Eastern Federal District Yuri Trutnev',
        about1: 'SUPPORT ENDANGERED AND RARE',
        about2: 'ANIMAL SPECIES THE FAR EAST'
      },
      login: {
        email: 'email',
        password: 'password',
        login: 'login',
        loginText: 'LOGIN',
        regText: 'REGISTRATION'
      },
      lot: {
        all: 'ALL LOTS',
        active: 'ACTIVE ONLY'
      },
      footer: {
        phones: 'Phones',
        addressHeader: 'Address',
        address: '123023, Moscow, Red Presnyia str., 24',
        socialHeader: 'Social links',
        header: 'Auction information',
        line1: 'Charity auction to support projects for the protection of endangered and rare species of the Far East is an initiative of the Deputy Chairman of the RF President in the Far Eastern Federal District Yuri Petrovich Trutnev and Russian Ministry of Natural Resources.',
        line2: 'The purpose of the auction - to raise funds for projects for the protection of rare species of animals - tigers and Far Eastern leopards.',
        line3: 'The auction will be held throughout the period of the Eastern Economic Forum on interactive exhibition "Wildlife of the Far East" - a special stand of Ministry of Russia. Auctioneer in the exhibition speak personally Yury Trutnev. It plans to sell unique jewelry, works of art from the Far East.',
        line4: 'In addition, the auction will be held on September 3 at the charity evening of "RusHydro". The lots will be exhibited kchestve life buoy autographed supermadeli and defender of the nature of Pamela Anderson, tanes a supermodel, works of art, personal certificates curator of rare species of the Far East.',
        line5: 'Also participating in the auction will be held on a special website, where participants of the forum will be presented to the valuable works of art and handmade products with protected natural terriroty.',
        line6: 'Participants in the charity auction will be the leaders and top managers of major Russian and international companies, leading scientific experts, representatives of federal and regional authorities.',
        line7: 'Participation in a charity auction - the best evidence of running a successful and socially responsible business, calculated nadlitelnuyu perspective, an example of indifference to the cause of protection of rare and endangered species of animals!',
        line8: 'All funds raised will be used for the implementation of environmental projects in the ANO "Siberian tiger" and ANO "Far Eastern leopard."',
        from: 'East Economic Forum 2015'
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
