import React from 'react';
import 'rc-time-picker/assets/index.css';
import ReactDOM from 'react-dom';
import TimePicker from 'rc-time-picker';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OpenHours = ({ day, geschlossen, onChange }) => (
  <li className="OpenHours">
    {day}
    {' '}
    <span>:</span>
    {' '}
    <span>von</span>
    {' '}
    <TimePicker showSecond={false} />
    {' '}
    <span>bis</span>
    {' '}
    <TimePicker showSecond={false} />
    {' '}
    <span>geschlossen</span>
    {' '}
    <input type="checkbox" checked={geschlossen === true} onChange={onChange} name="montagGeschlossen" />
  </li>
);

export default OpenHours;
