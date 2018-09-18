import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
      <Route exact path="/signin" render={props => (<AuthForm buttonText="Log in" heading="Welcome Back." {...props} />)} />
      <Route exact path="/signup" render={props => (<AuthForm buttonText="Sign me up" heading="Join today." {...props} />)} />
    </Switch>
  </div>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer,
  };
}

export default withRouter(connect(mapStateToProps)(Main));
