import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import Tweet from '@src/tweet';
import ProfileCard from '@src/profileCard';
import TweetForm from '@src/tweetForm';

import { handleErrors } from '@utils/fetchHelper';

import './home.scss';

class Home extends React.Component {
  state = {
    tweets: [],
  }

  componentDidMount() {
      fetch('/api/tweets')
        .then(handleErrors)
        .then(data => {
          this.setState({
            tweets: data.tweets,
          })
        })
    }

  render () {
    const { tweets } = this.state;

    return (
      <Layout>
        <div id="feedPage">
          <div className="row">
            <div className="col-xs-3 profile-trends">
              <ProfileCard />
            </div>
            <div className="col-xs-6 feed-box">
              <TweetForm />
              <div className="feed">
                {tweets.length > 0 ? tweets.map((tweet) => {
                  return (<Tweet
                    key={tweet.id}
                    tweet={tweet}
                  />);
                }) : <p>no tweets here</p>}

              </div>
            </div>
            <div className="col-xs-3 follow-suggest">
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
