import { MESSAGE_SEND, CHAT_ADD, CHAT_DELETE } from './actionTypes';

export function sendMessage(payload) {
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