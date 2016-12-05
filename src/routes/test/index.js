import React from 'react';
import Layout from '../../components/Layout';
import Test from './Test';
import { getWheather } from '../../actions/wheather';

const title = 'Route /test for test app';

export default {

  path: '/test',

  async action({store}) { // eslint-disable-line react/prop-types
    try {
      await store.dispatch(getWheather());

      return {
        title,
        component: <Layout><Test title={title} /></Layout>,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

};
