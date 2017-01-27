import update from 'react/lib/update';

const initialState = {
  recordings_list: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECORDINGS_LIST': {
      const newState = update(state, {
        recordings_list: { $set: action.recordings_list },
      });
      return newState;
    }
    case 'GET_RECORDINGS': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default user;
