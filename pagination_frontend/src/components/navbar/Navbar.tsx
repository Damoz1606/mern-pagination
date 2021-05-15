import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </nav>
        </div>
      );
  }
}

export default Navbar;
