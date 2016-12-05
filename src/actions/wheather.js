import {
  FETCH_WHEATHER_START,
  FETCH_WHEATHER_SUCCESS,
  FETCH_WHEATHER_ERROR,
} from '../constants';

import { API_KEY_WHEATHER } from '../config'


export function getWheather() {
  return async (dispatch, getState) => {
    const state = getState();

    console.log(state, 'state');

    dispatch({
      type: FETCH_WHEATHER_START
    });

    try {
      const response = await fetch('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=' + API_KEY_WHEATHER)

      const data = await response.json()

      dispatch({
        type: FETCH_WHEATHER_SUCCESS,
        payload: {
          ...data,
        },
      });
    } catch (error) {
      dispatch({
        type: FETCH_WHEATHER_ERROR,
        payload: {
          error,
        },
      });
      return false;
    }

    return true;
  };
}
