import { SET_CURRENCIES, SET_NEW_EXPENCIE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SET_NEW_EXPENCIE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
      rates: action.payload.rates,
    };
  default:
    return state;
  }
};

export default walletReducer;
