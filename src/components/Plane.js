//Future implementation: add distance calculation using lat/long

import './Plane.css';
import { useState, useEffect, React } from 'react';

function Plane(props) {
  return (
    <div id="plane">
      <h3>
        Flight: {props.flight.flight}
        <br />
        Type: {props.flight.t}
        <br />
        Registration: {props.flight.r}
        <br />
        Altitude: {props.flight.alt_baro} ft
        <br />
        Speed: {props.flight.gs}
        <br />
        Lat: {props.flight.lat}
        <br />
        Lon: {props.flight.lon}
      </h3>
    </div>
  );
}

export default Plane;
