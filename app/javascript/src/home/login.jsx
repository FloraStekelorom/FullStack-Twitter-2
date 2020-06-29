import React from 'react';
import ReactDOM from 'react-dom';

import './login.scss';

class Login extends React.Component {
  render () {

    return (
      <div className="log-in col-xs-4 col-xs-offset-1">
        <form>
          <div className="form-group">
          </div>
          <input type="text" className="form-control username" placeholder="Username" name="login_username" required/>
          <div className="form-group col-xs-8">
            <input type="password" className="form-control password" placeholder="Password" name="login_password" required/>
          </div>
          <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 col-xs-offset-1">Log in</button>
          <label>
            <input type="checkbox"/>
            <span>Remember me</span>
            <span> &#183; </span>
          </label>
          <a href="#">Forgot password?</a>
        </form>
      </div>
    )
  }
}

export default Login;
