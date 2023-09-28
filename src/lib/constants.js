export const navigation = [
  { path_url: '' },
  {
    nameBtn: 'About me',
    path_url: 'about',
  },
  {
    nameBtn: 'Methods',
    path_url: 'skills',
  },
  {
    nameBtn: 'Appointment',
    path_url: 'https://mercimed.by/uslugi/napravleniya/revmatologiya/',
  },
];

export const userPreferLanguage = window.navigator.language.substring(
  0,
  2,
); /* 'ru-Ru'*/
const currentLanguage = (preferLang, availableLanguages) => {
  return availableLanguages.find(({ locale }) => locale === preferLang)
    ? preferLang
    : 'ru';
};

export const language = [
  {
    locale: 'ru',
    textLang: 'Ru',
  },
  {
    locale: 'en',
    textLang: 'En',
  },
];

export const initial_state = currentLanguage(userPreferLanguage, language);
