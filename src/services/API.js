const URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');

  return currencies;
};

export default getCurrencies;
