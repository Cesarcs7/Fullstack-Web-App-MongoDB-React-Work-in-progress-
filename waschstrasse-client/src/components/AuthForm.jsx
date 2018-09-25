import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onAuth, history } = this.props;
    onAuth('signin', this.state).then(() => {
      history.push('/');
    }).catch(err => err);
  }

  render() {
    const { email } = this.state;
    const {
      heading,
      buttonText,
      errors,
      history,
      removeError,
    } = this.props;

    if (errors) {
      const unlisten = history.listen(() => {
        removeError();
        unlisten();
      });
    }

    return (
      <div>
        <div className="authForm">
          <form action="" onSubmit={this.handleSubmit} className="innerForm">
            <h2>{heading}</h2>
            {errors && (
              <div className="alert alert-danger">
                {errors}
              </div>
            )}
            <label htmlFor="email">
              Email
              <input className="form-control" id="email" name="email" type="text" onChange={this.handleChange} value={email} />
            </label>
            <label htmlFor="password">
              Key
              <input className="form-control" id="password" name="password" type="password" onChange={this.handleChange} />
            </label>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {
  heading: PropTypes.string.isRequired,
  onAuth: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  removeError: PropTypes.func.isRequired,
};
