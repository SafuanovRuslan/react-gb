import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR } from "./actionTypes";

export const REQUEST_STATUS = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const initialState = {
  data: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_PENDING: {
      return {
        ...state,
        request: {
          ...state.request,
          error: null,
          status: REQUEST_STATUS.PENDING,
        },
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        data: payload,
        request: {
          status: REQUEST_STATUS.SUCCESS,
          error: null,
        },
      };
    }
    case REQUEST_ERROR: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.ERROR,
          error: payload,
        },
      };
    }
    default:
      return state;
  }
};