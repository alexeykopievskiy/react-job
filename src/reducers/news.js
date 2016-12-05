import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
} from '../constants';

const defaultState = {};

export default function content(state = defaultState, action) {
  switch (action.type) {
    case FETCH_NEWS_START: {
      console.log('start');
      return {
        ...state,
        isFetching: true
      };
    }

    case FETCH_NEWS_SUCCESS: {
      console.log('success');

      console.log(state, 'state');
      console.log(state, 'news');
      return {
        ...state,
        news: action.payload,
        isFetching: false,
      };
    }

    case FETCH_NEWS_ERROR: {
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
