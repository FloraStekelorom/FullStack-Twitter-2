import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/common-component/layout';

import './home.scss';

import background_1 from '../../images/background_1.png'
import background_2 from '../../images/background_2.png'
import background_3 from '../../images/background_3.jpg'

const backgroundURL = [
  background_1,
  background_2,
  background_3,
]

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backStep: 0,
    }
  }

  componentDidMount () {
    this.backgroundTimer = window.setInterval(() => {
      let backStep = this.state.backStep + 1;
      if (backStep == backgroundURL.length) {
        backStep = 0;
      };
      this.setState({ backStep });
    }, 8000);
  }

  componentWillUnmount () {
    window.clearInterval(this.backgroundTimer);
  }

  render () {

    const backgroundImg = backgroundURL[this.state.backStep];

    return (
      <Layout>
        <div id="homeback" style={{backgroundImage: `url(${backgroundImg})`}}>
        </div>
        <div className="container">
          <h1>Home</h1>
        </div>
      </Layout>
    )
  }
}

export default Home;
