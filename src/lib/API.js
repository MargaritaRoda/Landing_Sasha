const getFetchUrlLanguageClientData = async (objLang, lang) => {
  /* lang принимаем из селектора */
  const url1 = 'http://localhost:3000/api/';
  const url = new URL(url1);
  url.searchParams.append('languages', objLang[lang]);
  return fetch(url);
};

// const getClientData = async () => {
//     // return  skills;
//     const response =  await getFetchUrlLanguageClientData(); /* fetchUrlLanguageOfClientData( oбьект языка, значение языка из Redux) */
//     return await response.json();
// }
//  export  const clientData = await getClientData();

export const getCardData = async () => {
  const response = await fetch('http://localhost:3000/');
  return await response.json();
};

// export const getAboutInfo = async () => {
//     const response =  await fetch('http://localhost:3000/api/about');
//     return await response.json();
// }
