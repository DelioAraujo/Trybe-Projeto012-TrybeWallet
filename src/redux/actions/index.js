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

export const SET_NEW_EXPENSE = 'SET_NEW_EXPENSE';
export const newExpenseUpdate = (expenses) => ({
  type: SET_NEW_EXPENSE,
  payload: expenses,
});

export const DELETE_EXPENSE_UPDATE = 'DELETE_EXPENSE_UPDATE';
export const deleteExpenseUpdate = (expenses) => ({
  type: DELETE_EXPENSE_UPDATE,
  payload: expenses,
});
