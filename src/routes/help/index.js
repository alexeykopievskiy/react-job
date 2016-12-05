import React from 'react';
import Layout from '../../components/Layout';
import Help from './Help';
import { getNews } from '../../actions/news';

const title = 'Route /help for test app';

export default {

  path: '/help',

  async action({store}) { // eslint-disable-line react/prop-types
    try {
      await store.dispatch(getNews());

      return {
        title,
        component: <Layout><Help title={title} /></Layout>,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

};
