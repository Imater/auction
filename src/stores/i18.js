import i18n from 'i18next-client';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const defaultState = {
  language: 'ru'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      console.info('final set', action.payload.language);
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
      console.info('change language', language);
      resolve({language: language});
    })
  };
}
