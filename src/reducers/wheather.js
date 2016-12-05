import {
  FETCH_WHEATHER_START,
  FETCH_WHEATHER_SUCCESS,
  FETCH_WHEATHER_ERROR,
} from '../constants';

const defaultState = {};

export default function content(state = defaultState, action) {
  switch (action.type) {
    case FETCH_WHEATHER_START: {
      console.log('start');
      return {
        ...state,
        isFetching: true
      };
    }

    case FETCH_WHEATHER_SUCCESS: {
      console.log('success');

      console.log(state, 'state');
      console.log(state, 'news');
      return {
        ...state,
        wheather: action.payload,
        isFetching: false,
      };
    }

    case FETCH_WHEATHER_ERROR: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }

    default: {
      return state;
    }
  }
}
