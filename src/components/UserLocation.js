import { React } from 'react';

function UserLocation(props) {
  const latitude = props.location.latitude;
  const longitude = props.location.longitude;

  return (
    <div>
      <h1>Your location is:</h1>
      <ul>
        <li>Lat: {latitude}</li>
        <li>Lon: {longitude}</li>
      </ul>
    </div>
  );
}

export default UserLocation;
