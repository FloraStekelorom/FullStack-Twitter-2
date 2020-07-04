import React from 'react';
import ReactDOM from 'react-dom';

import './layout.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
        <nav className="navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span id="user-icon">CurrentUser</span></a>
                <ul className="dropdown-menu row" role="menu">
                  <li ><a href="#" className="username">CurrentUser</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Lists</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Help</a></li>
                  <li ><a href="#">Keyboard shortcuts</a></li>
                  <li role="presentation" className="divider"></li>
                  <li ><a href="#">Settings</a></li>
                  <li ><a id="log-out" href="#">Log out</a></li>
                </ul>
              </li>
            </ul>
            <div className="search-bar col-xs-3 nav navbar-right">
              <div className="input-group">
                <input type="text" className="form-control search-input" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default search-btn" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div>
          {props.children}
        </div>
      </React.Fragment>
  );
}

export default Layout;