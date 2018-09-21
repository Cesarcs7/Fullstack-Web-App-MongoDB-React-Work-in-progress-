import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser, authsync } from '../store/actions/authAction';

const Main = (props) => {
  const { authUser, authsync } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
        <Route exact path="/waschstrasse" render={props => (<AuthForm buttonText="Log in" heading="Welcome Back." {...props} />)} />
        <Route
          exact
          path="/anbieter"
          render={props => (
            <AuthForm
              buttonText="Einloggen"
              heading="Als anbieter einloggen"
              onAuth={authsync}
              signupAnbieter
              {...props}
            />)}
        />
        <Route exact path="/signin" render={props => (<AuthForm buttonText="Log in" heading="Welcome Back." {...props} />)} />
        <Route exact path="/signup" render={props => (<AuthForm buttonText="Sign me up" heading="Join today." {...props} />)} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer,
  };
}

export default withRouter(connect(mapStateToProps, { authUser, authsync })(Main));
