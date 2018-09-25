import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/authAction';
import { removeError } from '../store/actions/errorAction';

const Main = (props) => {
  const {
    auth,
    error,
    remove,
    currentUser,
  } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => (<Homepage currentUser={currentUser} {...props} />)} />
        <Route exact path="/waschstrasse" render={props => (<AuthForm removeError={remove} buttonText="Log in" heading="Welcome Back." {...props} />)} />
        <Route
          exact
          path="/anbieter"
          render={props => (
            <AuthForm
              errors={error}
              removeError={remove}
              buttonText="Anmelden"
              heading="Als anbieter einloggen"
              onAuth={auth}
              signupAnbieter
              {...props}
            />)}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer,
    error: state.errorReducer.message,
  };
}

export default withRouter(connect(mapStateToProps, { auth: authUser, remove: removeError })(Main));
