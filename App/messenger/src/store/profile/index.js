import { CHANGE_VISIBILITY } from './actions';

const initialState = {
    name: 'User',
    age: 27,
    profession: 'web-developer',
    visibility: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_VISIBILITY:
        return {
          ...state,
          visibility: !state.visibility,
        };
        default:
          return state;
    }
}
  