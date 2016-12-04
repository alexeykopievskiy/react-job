import React from 'react';
import Layout from '../../components/Layout';
import Help from './Help';

const title = 'Route /help for test app';

export default {

  path: '/help',

  action() {
    return {
      title,
      component: <Layout><Help title={title} /></Layout>,
    };
  },

};
