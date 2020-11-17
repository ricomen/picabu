// Actions
export const TITLE = {
  REQUEST: 'get_title_request',
  ERROR: 'get_title_error',
  SUCCESS: 'get_title_success',
}

// Action Creators
export const getTitleRequest = () => ({
  type: TITLE.REQUEST,
});

export const getTitleError = (payload) => ({
    type: TITLE.ERROR,
    payload,
});

export const getTitleSuccess = (payload) => ({
  type: TITLE.SUCCESS,
  payload,
});