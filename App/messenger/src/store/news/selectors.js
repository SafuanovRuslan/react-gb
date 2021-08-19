import { REQUEST_STATUS } from "./";

export const selectArticles = (state) => state.news.data;

export const selectArticlesLoading = (state) =>
  state.news.request.status === REQUEST_STATUS.PENDING;
  
export const selectArticlesError = (state) => state.news.request.error;