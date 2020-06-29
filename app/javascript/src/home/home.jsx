import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/common-component/layout';

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <div className="container">
          <h1>Home</h1>
        </div>
      </Layout>
    )
  }
}

export default Home;
