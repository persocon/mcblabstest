import update from 'react/lib/update';

const initialState = {
  token: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const userState = update(state, {
        token: { $set: action.token },
      });
      return userState;
    }
    case 'GET_USER': {
      return state;
    }
    case 'RESET_USER': {
      const resetState = update(state, { $set: initialState });
      return resetState;
    }
    default: {
      return state;
    }
  }
};

export default user;
