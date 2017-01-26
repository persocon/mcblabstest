import update from 'react/lib/update';

const initialState = {
  user_info: {
    email: '',
    token: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const userState = update(state, {
        user_info: {
          email: { $set: action.user_info.email },
          token: { $set: action.user_info.token },
        },
      });
      return userState;
    }
    case 'GET_USER': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default user;
