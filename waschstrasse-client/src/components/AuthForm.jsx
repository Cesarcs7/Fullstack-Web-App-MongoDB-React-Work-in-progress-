import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrle: '',
    };
  }

  render() {
    const { email, username, profileImageUrle } = this.state;
    const { heading, buttonText } = this.props;
    return (
            <div>
                <div className="authForm">
                    <form action="">
                      <h2>{heading}</h2>
                    </form>
                </div>
            </div>
    );
  }
}
