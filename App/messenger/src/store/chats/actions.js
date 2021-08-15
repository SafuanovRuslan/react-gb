import { MESSAGE_SEND, CHAT_ADD, CHAT_DELETE } from './actionTypes';

export function sendMessage(payload) {
    console.log(payload)
    return {
        type: MESSAGE_SEND,
        payload
    }
}

export function chatAdd(payload) {
    return {
        type: CHAT_ADD,
        payload
    }
}

export function chatDelete(payload) {
    return {
        type: CHAT_DELETE,
        payload
    }
}

export const sendMessageWithReply = ({ id, message }) => (dispatch) => {
    dispatch(sendMessage({id, message}));
  
    setTimeout(() => {
      dispatch(
        sendMessage({id, message: {sender: "Robot", text: "Hi from thunk!", key: new Date().getTime()}})
      );
    }, 1500);
  };