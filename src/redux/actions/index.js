// cria action que atualiza o email no stado global ao fazer o login

export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
