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
    const { onAuth } = this.props;
    onAuth('signup', this.state).then(() => {
      console.log('Shit, bro');
    });
  }

  render() {
    const { email } = this.state;
    const { heading, buttonText } = this.props;
    return (
      <div>
        <div className="authForm testborder">
          <form action="" onSubmit={this.handleSubmit} className="innerForm testborder">
            <h2>{heading}</h2>
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
};
