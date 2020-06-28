import React from 'react';
import ReactDOM from 'react-dom';

import './tweetForm.scss';

class TweetForm extends React.Component {
  render () {


    return (
      <div className="col-xs-12 post-tweet-box">
        <form className="form-inline my-4">
          <input type="text" className="form-control" placeholder="What's happening?" name="userTweet" required/><br/>
          <div className="pull-right">
            <button className="btn btn-primary" id="post-tweet-btn">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}

export default TweetForm;
