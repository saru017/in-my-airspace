import './Plane.css';
import { useState, useEffect, React } from 'react';

function Plane(props) {
  return (
    <article>
      <h3>
        Flight: {props.flight.flight}
        <br />
        Type: {props.flight.t}
        <br />
        Hex: {props.flight.hex}
        <br />
        Altitude: {props.flight.alt_baro}
      </h3>
    </article>
  );
}

export default Plane;
