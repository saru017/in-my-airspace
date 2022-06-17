import './App.css';
import { useState, useEffect } from 'react';
import Plane from './components/Plane';
import { config } from './config';

function App() {
  const [location, setLocation] = useState([]);
  const fetchLocation = async () => {
    const response = await fetch('http://ip-api.com/json/');
    const data = await response.json();
    setLocation(data);
    //console.log(data);
  };

  //need to refactor using code below
  /*   if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
  } */

  const [planes, setPlanes] = useState([]);
  const fetchPlanes = async () => {
    const latT = location.lat.toFixed(3);
    const lonT = location.lon.toFixed(3);
    const options = {
      method: config.method,
      headers: config.headers,
    };

    fetch(
      `https://adsbexchange-com1.p.rapidapi.com/v2/lat/${latT}/lon/${lonT}/dist/25/`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPlanes(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchLocation();
    //fetchPlanes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Lat: {location.lat}</li>
          <li>Lon: {location.lon}</li>
        </ul>
        <button onClick={fetchPlanes}>Find Planes!</button>
        {!planes.ac ? '' : planes.ac.map((p) => <Plane flight={p.flight} />)}
      </header>
    </div>
  );
}

export default App;
