import { CHAT_ADD, CHAT_DELETE, MESSAGE_SEND } from './actionTypes';

const initialState = {
  cid_1: {
    name: 'Work',
    messages: [],
  },
  cid_2: {
    name: 'Friends',
    messages: [],
  },
  cid_3: {
    name: 'Mother',
    messages: [],
  },
  cid_4: {
    name: 'Technical support',
    messages: [],
  },
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
      case MESSAGE_SEND:
        return {
          ...state,
          [action.payload.id]: {...state[action.payload.id], messages: [...state[action.payload.id].messages, action.payload.message]}
          //[...state[action.payload.id].messages, action.payload.message],
        };
      case CHAT_ADD:
        return {
          ...state,
          ['cid_' + new Date().getTime()]: {name: action.payload, messages: []},
        }
      case CHAT_DELETE:
          delete state[action.payload];
          return {
            ...state,
          }
      default:
          return state;
    }
}
  