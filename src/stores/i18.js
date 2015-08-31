import i18n from 'i18next-client';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const defaultState = {
  language: 'ru'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { language: action.payload.language };
    default:
      return state;
  }
}

export function changeLanguage(language = 'eng') {
  console.info('CHANGE LANGUAGE = ', language);
  return {
    type: CHANGE_LANGUAGE,
    payload: new Promise((resolve, reject) => {
      i18n.setLng(language);
      resolve({language: language});
    })
  };
}
