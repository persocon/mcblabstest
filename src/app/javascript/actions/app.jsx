const resetApp = () => ({ type: 'RESET_APP' }); // this guy will erase all data on the redux-persist later

const setAppScreen = (screen) => ({
  type: 'SET_APP_SCREEN',
  screen,
});

const getAppScreen = () => ({ type: 'GET_APP_SCREEN' });

export { setAppScreen, getAppScreen, resetApp };
