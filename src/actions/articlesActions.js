// Actions
export const ARTICLES = {
  REQUEST: 'get_articles_request',
  ERROR: 'get_articles_error',
  SUCCESS: 'get_articles_success',
}

// Action Creators
export const getArticlesRequest = () => ({
  type: ARTICLES.REQUEST,
});

export const getArticlesError = (payload) => ({
    type: ARTICLES.ERROR,
    payload,
});

export const getArticlesSuccess = (payload) => ({
  type: ARTICLES.SUCCESS,
  payload,
});