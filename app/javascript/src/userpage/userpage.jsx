import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/common-component/layout';
import Tweet from '@src/common-component/tweet';
import ProfileCard from '@src/common-component/profileCard';
import TweetForm from '@src/common-component/tweetForm';

import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './userpage.scss';

class Userpage extends React.Component {
  state = {
    tweets: [],
    username: 'User',
    usernameProfile: 'User',
    tweetNumber: 0,
  }

  componentDidMount() {
    this.searchUrl();
    this.authenticate();
  }

  searchUrl = () => {
    if (window.location.href.indexOf("searchInput=") > -1) {
      console.log('identified');
      const params = new URLSearchParams(location.search);
      window.location.href= '/feed?'+(params);
    }
  }

  authenticate = (e) => {
    fetch(`/api/authenticated`, safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(res => {
      this.setState({ usernameProfile: res.username });
      this.getUsername();
      this.getTweets();
    })
  }

  getUsername = (e) => {
    const userName = window.location.pathname.replace('/', '');
    this.setState({ username: userName });
    //console.log(this.state.username);
  }

  getTweets = () => {
    fetch(`/api/users/${this.state.username}/tweets`)
      .then(handleErrors)
      .then(data => {
        //console.log(data)
        this.setState({
          tweets: data.tweets,
          tweetNumber: data.tweets.length,
        })
      })
  }

  render () {
    const { tweets, tweetNumber, username } = this.state;

    return (
      <Layout>
        <div id="feedPage">
          <div className="row">
            <div className="col-xs-3 profile-trends">
              <ProfileCard tweetNumber={this.state.tweetNumber}/>
            </div>
            <div className="col-xs-6 feed-box">
              <TweetForm getTweets={this.getTweets} />
              <div className="feed">
                {tweets.length > 0 ? tweets.map((tweet) => {
                  return (<Tweet
                    key={tweet.id}
                    tweet={tweet}
                    getTweets={this.getTweets}
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

export default Userpage;
