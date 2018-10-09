import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OpenHours = ({ day }) => (
  <li className="OpenHours">
    {day}
    {' '}
    <span>:</span>
    {'  '}
    <span>von</span>
    {' '}
    <input type="time" />
    {' '}
    <span>bis</span>
    {' '}
    <input type="time" />
    {' '}
    <span>geschlossen</span>
    {' '}
    <input type="radio" />
  </li>
);

export default OpenHours;
