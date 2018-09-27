import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { creatingWaschstrasseFlag } from '../store/actions/flagsActions';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    const { makingWaschstrasseFlag } = this.props;
    makingWaschstrasseFlag(true);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log('yt');
  }

  render() {
    const {
      currentUser,
      makingWaschstrasse,
    } = this.props;

    if (currentUser.user.waschstrassen.length === 0 && !makingWaschstrasse) {
      return (
        <div className="newWaschstrasse">
          <Link to="/" className="icon">
            <i className="fas fa-plus-circle" onClick={this.onClick} role="button" tabIndex={0} onKeyDown={this.handleKeyDown} />
          </Link>
          <h2>Neue Waschstrasse erstellen!</h2>
        </div>
      );
    }
    if (currentUser.user.waschstrassen.length === 0 && makingWaschstrasse) {
      return (
        <div>
          <h2>Panel!</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>jki</h2>
      </div>
    );
  }
}

AdminPanel.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  makingWaschstrasse: PropTypes.func.isRequired,
  makingWaschstrasseFlag: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUserReducer,
    makingWaschstrasse: state.flagsReducer.creatingWaschstrasseFlag,
  };
}

export default connect(
  mapStateToProps,
  { makingWaschstrasseFlag: creatingWaschstrasseFlag },
)(AdminPanel);
