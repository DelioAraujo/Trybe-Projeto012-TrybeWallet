import { getCurrencies } from '../../services/API';
// cria action que atualiza o email no stado global ao fazer o login

export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

// cria action que atualiza o currencies no stado global.

export const SET_CURRENCIES = 'SET_CURRENCY';
export const setCurrency = (currencies) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});
export const fetchAndSetCurrencies = () => async (dispatch) => {
  const currencies = await getCurrencies();
  dispatch(setCurrency(currencies));
};

// coloca uma nova expense no status global, na chave expensies

export const SET_NEW_EXPENCIE = 'SET_NEW_EXPENCIE';
export const newExpenseUpdate = (expenses, rates) => ({
  type: SET_NEW_EXPENCIE,
  payload: {
    expenses,
    rates,
  },
});
