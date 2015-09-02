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
        about2: 'ВИДОВ ЖИВОТНЫХ ДАЛЬНЕГО ВОСТОКА',
        accept: 'Принять участие',
        sold: 'Продано',
        winner: 'Победитель'
      },
      login: {
        email: 'электронная почта',
        password: 'пароль',
        login: 'войти',
        loginText: 'ВОЙТИ',
        regText: 'РЕГИСТРАЦИЯ',
        forgot: 'Забыли пароль?'
      },
      register: {
        fullname: 'ФИО',
        company: 'Название компании',
        job: 'Должность или статус участника',
        email: 'Электронная почта',
        phone: 'Телефон',
        password: 'Пароль',
        proceed: 'Продолжить',
        lastname: 'Фамилия',
        firstname: 'Имя',
        middlename: 'Отчество'
      },
      lot: {
        all: 'ВСЕ ЛОТЫ',
        active: 'ТОЛЬКО АКТИВНЫЕ',
        bid: 'Сделать ставку',
        rules: 'Ставка должна минимум на 10% превышать текущую цену. Делая ставку, вы обязуетесь выкупить лот по указанной цене.',
        rulesLink: 'Условия участия в аукционе'
      },
      footer: {
        phones: 'Телефоны',
        addressHeader: 'Адрес',
        address: '123022, г.Москва, ул.Красная Пресня, д.24',
        socialHeader: 'Социальные сети',
        header: 'Информация об аукционе',
        line1: 'Дорогие друзья!',
        line2: 'Благотворительный аукцион в поддержку проектов по защите исчезающих и редких видов животных Дальнего Востока проводится по инициативе Заместителя председателя Правительства Российской Федерации – полномочного представителя Президента Российской Федерации в Дальневосточном федеральном округе Юрия Петровича Трутнева и Минприроды России.',
        line3: 'Цель аукциона – сбор средств на реализацию проектов по защите редких видов животных – амурских тигров и дальневосточных леопардов.',
        line4: 'Кроме того, аукцион пройдет 3 сентября в рамках благотворительного вечера компании «Русгидро». В качестве лотов будут выставлены спасательный буек с автографом супермодели и защитницы природы Памелы Андерсон, танец с супермоделью, произведения искусства, именные сертификаты попечителя редких видов животных Дальнего Востока.',
        line5: 'Параллельно аукцион будет проходить на нашем сайте, где помимо перечисленных лотов, представлены ценные предметы искусства и изделия ручной работы c особо охраняемых природных территорий. Вы можете выбрать удобную для вас форму аукциона и принять участие в торгах по нескольким лотам одновременно.',
        line6: 'Участниками благотворительного аукциона станут руководители и топ-менеджеры крупнейших российских и международных компаний, ведущие научные эксперты, представители федеральных и региональных органов власти.',
        line7: 'Обращаем Ваше внимание, что средства, вырученные от продажи лотов аукциона, будут направлены в АНО «Центр «Амурский тигр» и АНО «Дальневосточные леопарды» для реализации проектов по сохранению этих уникальных видов. Подробнее о проектах вы можете узнать на сайтах:',
        link: 'www.amur-tiger.ru',
        linkName: 'www.amur-tiger.ru',
        link: 'www.leopard-center.com',
        linkName: 'www.leopard-center.com',
        line8: 'Участие в благотворительном аукционе – лучшее доказательство ведения успешного и социально ответственного бизнеса, рассчитанного на длительную перспективу, пример неравнодушия к делу охраны редких и исчезающих видов животных!',
        from: 'Восточный Экономический Форум 2015'
      },
      about: {
        text: 'Технологическая платформа аукциона спроектирована, разработана и поддерживается компанией Лоои',
        link: 'http://looi.ru',
        linkName: 'looi.ru'
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
        about2: 'ANIMAL SPECIES THE FAR EAST',
        accept: 'Participate',
        sold: 'Sold',
        winner: 'Winner'
      },
      login: {
        email: 'email',
        password: 'password',
        login: 'login',
        loginText: 'LOGIN',
        regText: 'REGISTRATION',
        forgot: 'Forgot password?'
      },
      register: {
        fullname: 'Fullname',
        company: 'Company name',
        job: 'Job title',
        email: 'Email',
        phone: 'Phone',
        password: 'Password',
        proceed: 'Next',
        lastname: 'Lastname',
        firstname: 'Firstname',
        middlename: 'Middlename'
      },
      lot: {
        all: 'ALL LOTS',
        active: 'ACTIVE ONLY',
        bid: 'Place bet',
        rules: 'The rate must be at least 10% higher than the current price. By bidding, you agree to redeem the item at a specified price.',
        rulesLink: 'Conditions for participation in the auction'
      },
      footer: {
        phones: 'Phones',
        addressHeader: 'Address',
        address: '123022, Moscow, Red Presnyia str., 24',
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
      },
      about: {
        text: 'Auction technology platform designed, developed and maintained by Looi',
        link: 'http://looi.co',
        linkName: 'looi.co'
      }
    }
  }
};

i18n.init({
  resStore: resources,
  debug: false,
  fallbackLng: 'ru',
  cookieName: 'lang',
  getAsync: false
});
