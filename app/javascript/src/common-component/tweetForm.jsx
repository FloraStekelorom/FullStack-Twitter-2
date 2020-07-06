import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './tweetForm.scss';

class TweetForm extends React.Component {
  state = {
    tweet: '',
    error: '',
    tweetButton: true,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  charCount = () => {
    if (this.state.tweet.length > 0 && this.state.tweet.length <= 140) {
      this.setState({tweet: this.state.tweet})
      this.setState({tweetButton: false});
    } else {
      this.setState({tweetButton: true});
    }
  }

  post = (e) => {
   if (e) { e.preventDefault(); }
   this.setState({
     error: '',
   });


   fetch('/api/tweets', safeCredentials({
         method: 'POST',
         body: JSON.stringify({
           tweet: {
             message: this.state.tweet,
           }
         })
       }))
         .then(handleErrors)
         .then(data => {
           this.props.getTweets();
         })
         .catch(error => {
           this.setState({
             error: 'Could not post tweet',
           })
         })
  }

  render () {

    const { tweet, error, tweetButton } = this.state;

    return (
      <div className="col-xs-12 post-tweet-box">
        <form className="form-inline my-4" onSubmit={this.post}>
          <input type="text" className="form-control" placeholder="What's happening?" name="tweet" value={tweet} onChange={this.handleChange} onKeyUp={this.charCount} required/><br/>
          <div className="pull-right">
            <button className="btn btn-primary" id="post-tweet-btn" disabled={tweetButton} >Tweet</button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default TweetForm;
