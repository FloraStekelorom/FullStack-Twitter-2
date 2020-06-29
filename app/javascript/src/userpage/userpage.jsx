import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/common-component/layout';

import './userpage.scss';

class Userpage extends React.Component {
  render () {
    return (
      <Layout>
        <div className="container">
          <h1>Userpage</h1>
        </div>
      </Layout>
    )
  }
}

export default Userpage;
