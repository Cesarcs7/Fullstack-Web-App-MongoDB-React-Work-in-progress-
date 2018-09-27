import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../images/localwashlogo.png';
import { logout } from '../store/actions/authAction';

const Navbar = (props) => {
  const { currentUser, abmelden } = props;
  return (
    <nav className="navbar ">
      <div className=" logo ">
        <Link to="/">
          <img src={logo} alt="LocalWash" className="localwashLogo" />
        </Link>
      </div>
      <ul className="navigation_links ">
        <li>
          <Link to="waschstrasse">Waschstrasse</Link>
        </li>
        <li>
          <Link to="anbieter">Anbieter</Link>
        </li>
      </ul>
      {currentUser.isAuthenticated && (
      <ul className="logged">
        <li>
          <Link to="anbieter">{currentUser.user.firmaName}</Link>
        </li>
        <li>
          <button className="btn btn-outline-primary" type="button" onClick={abmelden}>Abmelden</button>
        </li>
      </ul>)}
    </nav>
  );
};


Navbar.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  abmelden: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer,
  };
}

export default connect(mapStateToProps, { abmelden: logout })(Navbar);
