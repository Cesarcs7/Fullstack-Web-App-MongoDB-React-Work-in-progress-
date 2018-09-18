import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/localwashlogo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className='container-fluid'>
        <div className="navbar-header">
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt="Simple Movie Manager" />
          </Link>
          </div>
        
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <Link to ='signup'>Sign up</Link>
          </li>
          <li>
            <Link to ='signin'>Sign in</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUserReducer,
  };
}

export default connect(mapStateToProps, null)(Navbar);