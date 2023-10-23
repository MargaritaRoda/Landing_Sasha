import { API_CARD } from './config';

export const getCardData = async (lang) => {
  let url = new URL(API_CARD);
  url.searchParams.append('lang', lang);
  const response = await fetch(url);
  return await response.json();
};
