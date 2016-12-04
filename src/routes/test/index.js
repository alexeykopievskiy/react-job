import React from 'react';
import Layout from '../../components/Layout';
import Test from './Test';

const title = 'Route /test for test app';

export default {

  path: '/test',

  action() {
    return {
      title,
      component: <Layout><Test title={title} /></Layout>,
    };
  },

};
