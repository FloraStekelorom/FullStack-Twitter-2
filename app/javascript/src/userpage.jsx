import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';

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
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Userpage />,
    document.body.appendChild(document.createElement('div')),
  )
})
