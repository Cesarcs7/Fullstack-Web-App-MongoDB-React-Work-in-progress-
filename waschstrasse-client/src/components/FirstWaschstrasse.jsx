import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OpenHours from './OpenHours.';

const FirstWaschstrasse = ({
  onChange,
  name,
  strasse,
  nummer,
  PLZ,
  ort,
  geschlossen,
  montagGeschlossen,
  radioButton,
}) => (
  <div className="firtsWaschstrasseForm">
    <form action="">
      <h3>Name</h3>
      <input type="text" className="form-control firstName" onChange={onChange} value={name} name="name" />
      <h3>Adresse</h3>
      <div className="firstAdresse">
        <div className="firstStrasseAndHausNummer">
          <label htmlFor="Strasse" className="firstStrasse">
            Strasse
            <input type="text" className="form-control" onChange={onChange} value={strasse} name="strasse" />
          </label>
          <label htmlFor="HausNummer" className="firstHausNummer">
             Nummer
            <input type="text" className="form-control" onChange={onChange} value={nummer} name="nummer" />
          </label>
        </div>
        <div className="firstPLZAndOrt">
          <label htmlFor="PLZ" className="firstPLZ">
           PLZ
            <input type="text" className="form-control" onChange={onChange} value={PLZ} name="PLZ" />
          </label>
          <label htmlFor="Ort" className="firstOrt">
          Ort
            <input type="text" className="form-control firstOrt" onChange={onChange} value={ort} name="ort" />
          </label>
        </div>
      </div>
      <h3>Öfnungszeiten</h3>
      <ul>
        <OpenHours day="Montag" geschlossen={montagGeschlossen} onChange={radioButton} />
        <OpenHours day="Dienstag" geschlossen={geschlossen} onChange={radioButton} />
        <OpenHours day="Mittwoch" geschlossen={geschlossen} onChange={radioButton} />
        <OpenHours day="Donnerstag" geschlossen={geschlossen} onChange={radioButton} />
        <OpenHours day="Freitag" geschlossen={geschlossen} onChange={radioButton} />
        <OpenHours day="Samstag" geschlossen={geschlossen} onChange={radioButton} />
        <OpenHours day="Sonntag" geschlossen={geschlossen} onChange={radioButton} />
      </ul>
    </form>
    <button type="button" className="btn btn-success nextButton">Next</button>
  </div>
);

export default FirstWaschstrasse;
