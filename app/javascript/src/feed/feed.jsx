import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/common-component/layout';
import Tweet from '@src/common-component/tweet';
import ProfileCard from '@src/common-component/profileCard';
import TweetForm from '@src/common-component/tweetForm';

import { handleErrors } from '@utils/fetchHelper';

import './feed.scss';

class Feed extends React.Component {
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

export default Feed;
