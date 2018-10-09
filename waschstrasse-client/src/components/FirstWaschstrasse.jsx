import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OpenHours from './OpenHours.';

const FirstWaschstrasse = (props) => (
        
        <div className="firtsWaschstrasseForm">
            <form action="">
            <h3>Name</h3>
            <input type="text" className="form-control firstName"/>
            <h3>Adresse</h3>
            <div className="firstAdresse">
                <div className="firstStrasseAndHausNummer">
            <input type="text" className="form-control firstStrasse"/>
            <input type="text" className="form-control firstHausNummer"/>
                </div>
                <div className="firstPLZAndOrt">
            <input type="text" className="form-control firstPLZ"/>
            <input type="text" className="form-control firstOrt"/>
                </div>
            </div>
            <h3>Öfnungszeiten</h3>
            <ul>
                <OpenHours day="Montag"/>
                <OpenHours day="Dienstag"/>
                <OpenHours day="Mittwoch"/>
                <OpenHours day="Donnerstag"/>
                <OpenHours day="Freitag"/>
                <OpenHours day="Samstag"/>
                <OpenHours day="Sonntag"/>
            </ul>
            </form>
        </div>
    
);

export default FirstWaschstrasse;
