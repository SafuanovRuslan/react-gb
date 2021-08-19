import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from "./actionTypes";

const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=1';

const getArticlesPending = () => ({
  type: REQUEST_PENDING,
});

const getArticlesSuccess = (articles) => ({
  type: REQUEST_SUCCESS,
  payload: articles,
});

const getArticlesError = (error) => ({
  type: REQUEST_ERROR,
  payload: error,
});

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesPending());

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const result = await response.json();

    dispatch(getArticlesSuccess(result));
  } catch (err) {
    dispatch(getArticlesError(err.message));
  }
};