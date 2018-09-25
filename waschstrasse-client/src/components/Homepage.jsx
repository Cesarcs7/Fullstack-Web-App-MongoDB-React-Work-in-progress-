import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>Whats Happening?</h1>
        <h4>New?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>fuck</h1>
    </div>
  );
};

Homepage.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
};

export default Homepage;
