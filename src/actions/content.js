/* eslint-disable import/prefer-default-export */

import {
  FETCH_CONTENT_START,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_ERROR,
} from '../constants';

import { selectContent } from '../reducers/content';


export function getContent({ path, locale, force }) {
  return async (dispatch, getState) => {
    const state = getState();

    // eslint-disable-next-line no-param-reassign
    locale = locale || state.intl.locale;
    const payload = {
      path,
      locale,
    };

    if (!force) {
      const cachedContent = selectContent(state, payload);
      if (cachedContent) {
        return true;
      }
    }

    dispatch({
      type: FETCH_CONTENT_START,
      payload,
    });

    try {
      const { data } = {'content':'lol'}
      dispatch({
        type: FETCH_CONTENT_SUCCESS,
        payload: {
          ...data.content,
          path,
          locale,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_CONTENT_ERROR,
        payload: {
          error,
          path,
          locale,
        },
      });
      return false;
    }

    return true;
  };
}
