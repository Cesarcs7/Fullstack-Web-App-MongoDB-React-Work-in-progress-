import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { creatingWaschstrasseFlag } from '../store/actions/flagsActions';
import FirstWaschstrasseForm from '../components/FirstWaschstrasse';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      strasse: '',
      PLZ: '',
      ort: '',
      nummer: '',
      montagGeschlossen: false,
      dienstagGeschlossen: false,
      mittwochGeschlossen: false,
      donnerstagGeschlossen: false,
      freitagGeschlossen: false,
      samstagGeschlossen: false,
      sonntagGeschlossen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
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

  handleRadioButton(e) {
    this.setState({
      [e.target.name]: !this.state.ne,
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
        <FirstWaschstrasseForm onChange={this.handleChange} radioButton={this.handleRadioButton} {...this.state} />
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
