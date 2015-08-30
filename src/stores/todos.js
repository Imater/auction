import { List } from 'immutable';

export const TODO_CREATE = 'TODO_CREATE';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_DESTROY = 'TODO_DESTROY';

const setDate = ()=> {
  return new Date(Date.parse('2015/09/30 13:00:00'));
};
const defaultState = new List([
  {
    image: '/assets/images/IMG_5508.JPG',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлена Директором Департамента государственной политики и регулирования в области охраны окружающей среды Минприроды России Д.М. Белановичем',
    text: 'Вашему вниманию представлен уникальный лот, любезно предоставленный для участия в Благотворительном Аукционе компанией ОАО «ГМК «Норильский никель». Став обладателем двух эксклюзивных изделий, отражающих  мощь и потенциал российской геологии, Вы на полном праве сможете называть себя владельцем части мировых запасов Никеля и Меди.',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽',
    name: 'И.П. Петров',
    startTime: setDate('13:00:00')
  },
  {
    image: '/assets/images/IMG_1876-1.jpg',
    id: '28737844',
    title: 'А.О.Гаганидзе "Бричка"',
    from: 'Предоставлен компанией Запад строй',
    startCost: '130 000 ₽',
    name: 'А.П. Светлов',
    nowCost: '230 000 ₽'
  },
  {
    image: '/assets/images/lot-filin.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Тигр"',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'Л.П. Кураев',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/IMG_2913.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Этнография"',
    from: 'Предоставлена Директором Департамента государственной политики и регулирования в области охраны окружающей среды Минприроды России Д.М. Белановичем',
    startCost: '230 000 ₽',
    name: 'Р.А. Самойлов',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/pavlishin-tigr-winter.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Тигр на отдыхе"',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'П.А. Кентушев',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/lot-2-2.jpg',
    id: '28737844',
    title: 'Эскимосы',
    from: 'Предоставлен компанией Восток строй',
    startCost: '229 000 ₽',
    name: 'Участник 7',
    nowCost: '379 000 ₽'
  },
  {
    image: '/assets/images/IMG_5508.JPG',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлена Директором Департамента государственной политики и регулирования в области охраны окружающей среды Минприроды России Д.М. Белановичем',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽',
    name: 'Участник 11',
    startTime: setDate('13:00:00')
  },
  {
    image: '/assets/images/IMG_1876-1.jpg',
    id: '28737844',
    title: 'А.О.Гаганидзе "Бричка"',
    from: 'Предоставлен компанией Запад строй',
    startCost: '130 000 ₽',
    name: 'Участник 3',
    nowCost: '230 000 ₽'
  },
  {
    image: '/assets/images/lot-filin.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Тигр"',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'Участник 22',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/IMG_2913.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Этнография"',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'Участник 29',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/pavlishin-tigr-winter.jpg',
    id: '28737844',
    title: 'И.И.Павлишин "Тигр на отдыхе"',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'А.В. Гайдышев',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/lot-2-2.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    name: 'П.В. Луков',
    nowCost: '380 000 ₽'
  }
]);

export default function(state = defaultState, action) {
  switch (action.type) {
    case TODO_CREATE:
      return state.concat(action.payload.text);
    case TODO_DESTROY:
      return state.delete(action.payload.id);
    default:
      return state;
  }
}

export function addTodo(text) {
  return {
    type: TODO_CREATE,
    payload: {
      text: text
    }
  };
}

export function deleteTodo(id) {
  return {
    type: TODO_DESTROY,
    payload: {
      id: id
    }
  };
}

