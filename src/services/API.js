const URL = 'https://economia.awesomeapi.com.br/json/all';

export const apiRequest = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getCurrencies = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');

  return currencies;
};
