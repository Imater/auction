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
        winner: 'Победитель',
        home: 'На главную',
        quote1: '«Мы все живем в ритме XXI века.',
        quote2: 'Жизнь подчинена жесткому графику: творчество, общение, работа и отдых. При этом мы редко задумываемся о том, что являемся частью биосферы, нашего дома-планеты Земля. Просто представителем того вида, которому повезло иметь разум. Мы забываем о том, что вокруг нас живут младшие братья: звери, птицы и рыбы. Но разум должен рождать ответственность и заботу о младших.',
        quote3: 'Мы предлагаем Вам сегодня помочь сохранению на Земле прекрасных животных - тигров и леопардов. На Дальнем Востоке сохранилось до 540 особей амурских тигров и до 70 особей дальневосточных леопардов.',
        quote4: 'Купите понравившийся лот аукциона. Помогите грациозным диким кошкам сохраниться на Земле».',
        quote5: 'Заместитель председателя Правительства Российской Федерации — полномочный представитель Президента Российской Федерации в Дальневосточном федеральном округе',
        quote6: 'Ю.П. Трутнев',
      },
      login: {
        email: 'электронная почта',
        password: 'пароль',
        login: 'войти',
        loginText: 'ВОЙТИ',
        regText: 'РЕГИСТРАЦИЯ',
        forgot: 'Забыли пароль?',
        loginToBid: 'Войдите, чтобы сделать ставку',
        restore: 'Данные по вашему аккаунту высланы к вам на email',
        exit: 'Выход'
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
        rulesLink: 'Условия участия в аукционе',
        other: 'ДРУГИЕ ЛОТЫ',
        showall: 'Показать все ставки',
        sold: 'Торги состоялись',
        lotNumber: "Лот №"
      },
      footer: {
        toTop: 'Наверх',
        support: 'Техническая поддержка',
        committee: 'Организационный комитет',
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
        link1: 'www.amur-tiger.ru',
        linkName1: 'www.amur-tiger.ru',
        link2: 'www.save-leopard.ru',
        linkName2: 'www.save-leopard.ru',
        line8: 'Участие в благотворительном аукционе – лучшее доказательство ведения успешного и социально ответственного бизнеса, рассчитанного на длительную перспективу, пример неравнодушия к делу охраны редких и исчезающих видов животных!',
        from: 'Восточный Экономический Форум 2015'
      },
      about: {
        text: 'Технологическая платформа аукциона спроектирована, разработана и поддерживается компанией Лоои',
        link: 'http://looi.ru',
        linkName: 'looi.ru'
      },
      conditions: {
          conditions1: 'Условия участия',
          conditions2: 'Регистрируясь Вы подтверждаете достоверность вводимой персональной информации, соглашаетесь принять участие в аукционе, гарантируете оплату выбранных лотов и соглашаетесь на то, что Ваша ставка, в том числе победившая в аукционе, а также Ваши фамилия, имя и отчество, становятся видимы прочим участникам аукциона. Ваш адрес электронной почты и номер Вашего телефона могут быть использованы организаторами для осуществления формальностей, связанных с аукционом, но при этом не становятся публичными.',
          conditions3: 'Настоящим Вы также даете согласие на предоставление Ваших персональных данных (адрес электронной почты, номер телефона, место работы и должность, фамилия, имя, отчество) и по собственной воле даете согласие на их обработку в целях использования для информирования прочих участников аукциона о сделанных ставках, информирования организаторов аукциона об участниках аукциона, передачи данных для последующей организации сделки в случае выбора определенного лота, а также подтверждаете что Ваш возраст превышает 18 лет.',
          conditions4: 'Время проведения аукциона: в период работы Восточного экономического форума, с 10:00 03.09.2015 по 12:00 05.09.2015 г. Шаг аукциона не может составлять менее 10% от стоимости лота.',
          conditions5: 'В определенные часы организаторы могут отдельно объявлять о возможности одномоментного выкупа определенного лота (группы лотов) с одновременным условием повышения ставки на существенный процент (до 100%).',
          conditions6: 'Вы обязуетесь внимательно ознакомиться со всем содержимым объявления, прежде чем делать ставку. Вы согласны принимать звонки и сообщения от организаторов на любые номера телефонов, адреса электронной почты, которые вы предоставили организаторам или которые были получены другими способами.',
          conditions7: 'Поскольку Вам станет известна информация о другом участнике (его ставке и ФИО), вы обязуетесь не раскрывать, не продавать, не распространять и не передавать информацию публично о другом пользователе третьим лицам для целей, не связанных с оказанием помощи в реализации  проектов по сохранению указанных выше видов животных.',
          conditions8: 'Обращаем Ваше внимание что настоящий сайт является лишь инструментом для информирования участников аукциона об имеющихся лотах и сбора информации от участников. Сайт не является площадкой для заключения сделок или иных финансовых операций.  Для осуществления сделок по приобретению понравившихся лотов необходимо обратиться на специальный стенд аукциона (выставка «Дикая природа Дальнего Востока», 3-й уровень, корпус А) либо по телефонам организаторов. Сделка по приобретения лота осуществляется между участником и организатором аукциона (Фонд содействия охране окружающей среды "Природа") в соответствии с законодательством Российской Федерации. При этом организатор обязуется обеспечить оформление сделки с участником в течение 30 дней с момента завершения аукциона. Допускается, что по отдельным сделкам сторонами могут выступать также иные юридические и физические лица.',
          conditions9: 'Средства, вырученные от продажи лотов аукциона, будут направлены организатором аукциона в АНО «Центр «Амурский тигр» и АНО «Дальневосточные леопарды» для реализации проектов по сохранению соответствующих уникальных видов животных. Подробнее о проектах по сохранению популяций амурского тигра и дальневосточного леопарда вы можете узнать на сайтах: ',
          and: 'и'
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
        about1: 'SUPPORT THE FAR EASTERN ENDANGERED',
        about2: 'AND RARE ANIMAL SPECIES',
        accept: 'Participate',
        sold: 'Sold',
        winner: 'Winner',
        home: 'Home',
        quote1: '"We all live in the rhythm of the XXI century.',
        quote2: 'Life is subordinated to a rigid schedule: creativity, communication, work and leisure. However, we rarely think about the fact that we are part of the biosphere, our home, planet Earth. Just the kind of representative, who was lucky to have a reason. We forget that we live around the younger brothers: animals, birds and fish. But the mind must give rise to the responsibility and care of the younger ones.',
        quote3: 'We offer you today to help preserve the world of wonderful animals - tigers and leopards. In the Far East it remained up to 540 individuals tigers and 70 leopards individuals.',
        quote4: 'Buy desired item auction. Help graceful wild cats survive on Earth. "',
        quote5: 'Deputy Chairman of the Government of the Russian Federation - Plenipotentiary Representative of RF President in the Far Eastern Federal District',
        quote6: 'Yuri  Trutnev',
      },
      login: {
        email: 'email',
        password: 'password',
        login: 'login',
        loginText: 'LOGIN',
        regText: 'REGISTRATION',
        forgot: 'Forgot password?',
        loginToBid: 'Login to place bet',
        restore: 'Your acount info sended to your email',
        exit: 'Logout'
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
        rulesLink: 'Conditions for participation in the auction',
        other: 'OTHER LOTS',
        showall: 'Show all',
        sold: 'Sold',
        lotNumber: "Lot #"
      },
      footer: {
        toTop: 'Top',
        support: 'Support',
        committee: 'Organizing committee',
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
        text: 'Auction technology platform designed, developed and maintained by Looi',
        link: 'http://looi.co',
        linkName: 'looi.co'
      },
      conditions: {
          conditions1: 'Conditions of participation',
          conditions2: 'By registering You confirm the reliability of input personal information, agree to participate in theauction, warrant payment of selected lots and agree that Your bet, including winning the auction, as well as Your surname, name and patronymic are visible to other auction participants. Your email address and Your phone number can be used by the organizers for the implementation of the formalities associated with the auction, but did not become public.',
          conditions3: 'You hereby also consent to our providing Your personal data (email address, telephone number, place ofwork and position, surname, name, patronymic) and voluntarily consent to their processing in order to inform other bidders bets, inform the organizers of the auction on auction participants, data for the subsequent organization of a transaction if you select a certain item, as well as confirm that Your age is over 18 years.',
          conditions4: 'Time of auction: during the work of the Eastern economic forum, from 10:00 03.09.2015 in 12:00 05.09.2015 G. auction Step cannot be less than 10% of the value of the lot.',
          conditions5: 'At certain hours the organizers can announce the possibility of simultaneous foreclosure of a certain lot (groups of lots) with simultaneous to raising rates on a significant percentage (up to 100%).',
          conditions6: 'You agree to carefully read the full item listing before making a bid. You agree to receive calls and messages from the organizers on any phone numbers, email addresses you have provided to the organizers or which have been obtained by other methods.',
          conditions7: 'As You become aware of information about the other party (his bet and FIO), you agree not to disclose,sell, distribute or pass the information publicly about another user to any third party for purposes unrelated to the provision of assistance in the implementation of projects for the conservation of the above species.',
          conditions8: 'Please note that this site is only a tool to inform the bidders about available lots and collectinginformation from the participants. The site is not a platform for transactions or other financial transactions. For transactions for the purchase of lots must apply to the special bench of the auction (exhibition "wildlife of the Far East", 3rd level, building А) for the organizers. The deal for the acquisition of the lot is between the participant and the organizer of the auction (Fund for the protection of the environment "Nature") in accordance with the legislation of the Russian Federation. In this case the organizer is obliged to ensure the registration of the transaction with the participant within 30 days after the close of the auction. Accepted that for certain transactions the parties may also be other legal and physical persons.',
          conditions9: 'Proceeds from the sale of auction items will be sent by the auction organizer in ANO "Center "Amurtiger" and ANO "far Eastern leopards" for projects relevant for the conservation of unique species of animals. Read more about projects on the conservation of populations of the Amur tiger and far Eastern leopard you can read on the websites: ',
          and: 'and'
      }
    }
  }
};

i18n.init({
  resStore: resources,
  debug: false,
  lng: (typeof window !== 'undefined' && __LANG__.language) ? __LANG__.language : 'ru',
  fallbackLng: 'ru',
  cookieName: 'lang',
  getAsync: false
});
