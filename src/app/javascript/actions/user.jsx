const resetUser = () => ({ type: 'RESET_USER' });
const setUser = token => ({
  type: 'SET_USER',
  token,
});
const getUser = () => ({ type: 'GET_USER' });
export { setUser, resetUser, getUser };
