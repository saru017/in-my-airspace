import './App.css';
import { useState, useEffect } from 'react';
import Plane from './components/Plane';
import UserLocation from './components/UserLocation';
import { config } from './config';

function App() {
  let location = {
    latitude: '',
    longitude: '',
  };

  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
      });
    }
  };

  const [planes, setPlanes] = useState([]);
  const fetchPlanes = async () => {
    const latT = location.latitude.toFixed(3);
    const lonT = location.longitude.toFixed(3);
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
        <UserLocation location={location} />
        <button onClick={fetchPlanes}>Find Planes!</button>
        {!planes.ac ? '' : planes.ac.map((p) => <Plane flight={p.flight} />)}
      </header>
    </div>
  );
}

export default App;
