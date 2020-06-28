import React from 'react';
import ReactDOM from 'react-dom';

import './tweet.scss';

class Tweet extends React.Component {
  render () {

    const { tweet } = this.props;
    const { message, username } = tweet;

    return (
      <div className="tweetBox col-xs-12">
        <a className="tweetUsername" href="#">{username}</a>
        <a className="screenName" href="#">  @{username}</a>
        <p>{message}</p>
        <a className="delete-tweet">Delete</a>
      </div>
    )
  }
}

export default Tweet;
