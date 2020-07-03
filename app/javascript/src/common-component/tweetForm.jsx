import React from 'react';
import ReactDOM from 'react-dom';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './tweetForm.scss';

class TweetForm extends React.Component {
  state = {
    tweet: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
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
           console.log('success')
           this.props.getTweets();
         })
         .catch(error => {
           this.setState({
             error: 'Could not post tweet',
           })
         })
  }

  render () {

    const { tweet, error } = this.state;

    return (
      <div className="col-xs-12 post-tweet-box">
        <form className="form-inline my-4" onSubmit={this.post}>
          <input type="text" className="form-control" placeholder="What's happening?" name="tweet" value={tweet} onChange={this.handleChange} required/><br/>
          <div className="pull-right">
            <button className="btn btn-primary" id="post-tweet-btn">Tweet</button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default TweetForm;
