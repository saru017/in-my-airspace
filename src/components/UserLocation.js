import { React } from 'react';

function UserLocation(props) {
  const latitude = props.location.latitude;
  const longitude = props.location.longitude;

  return (
    <div className="location">
      <h1>Your location is:</h1>
      <h3>(Or as best as I can guess it)</h3>
      <ul>
        <li>Lat: {latitude}</li>
        <li>Lon: {longitude}</li>
      </ul>
    </div>
  );
}

export default UserLocation;
