import React from 'react';
import ReactDOM from 'react-dom';

import './signup.scss';

class Signup extends React.Component {
  render () {

    return (
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form>
          <div className="new-to-t">
            <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
          </div>
          <div className="form-group">
            <input type="text" className="form-control username" placeholder="Username" name="signup_username" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control email" placeholder="Email" name="signup_email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control password" placeholder="Password" name="signup_password" required />
          </div>
          <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
        </form>
      </div>
    )
  }
}

export default Signup;
