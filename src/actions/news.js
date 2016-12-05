import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
} from '../constants';

import { API_KEY } from '../config'




export function getNews({ path }) {
  return async (dispatch, getState) => {
    const state = getState();


    /*if (!force) {
      const cachedContent = selectContent(state, payload);
      if (cachedContent) {
        return true;
      }
    }*/

    dispatch({
      type: FETCH_NEWS_START
    });

    try {

      const response = await fetch('https://newsapi.org/v1/sources?source=bbc-news&sortBy=top&apiKey=' + API_KEY)

      const data = await response.json()
      console.log(data, 'ttt');



      dispatch({
        type: FETCH_NEWS_SUCCESS,
        payload: {
          ...data.sources,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_NEWS_ERROR,
        payload: {
          error,
        },
      });
      return false;
    }

    return true;
  };
}
