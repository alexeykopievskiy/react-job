import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import content from './content';
import news from './news';
import wheather from './wheather';

export default combineReducers({
  user,
  runtime,
  intl,
  content,
  news,
  wheather,
});
