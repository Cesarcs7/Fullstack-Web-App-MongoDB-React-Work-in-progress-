import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="home-hero">
    <h1>Whats Happening?</h1>
    <h4>New?</h4>
    <Link to="/signup" className="btn btn-primary">
         Sign up here
    </Link>
  </div>
);

export default Homepage;
