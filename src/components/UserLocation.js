import { useState, useEffect, React } from 'react';

function UserLocation(props) {
  const latitude = props.latitude;
  const longitude = props.longitude;

  

  return (
    <ul>
      <li>Lat: {props.latitude}</li>
      <li>Lon: {props.longitude}</li>
    </ul>
  );
}

export default UserLocation;
