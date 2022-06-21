import './App.css';
import { useState } from 'react';
import Plane from './components/Plane';
import UserLocation from './components/UserLocation';
import { usePosition } from './components/usePosition';
import PlaneCount from './components/PlaneCount';

function App() {
  const location = usePosition();

  const [planes, setPlanes] = useState([]);
  const fetchPlanes = async () => {
    const latT = location.latitude.toFixed(3);
    const lonT = location.longitude.toFixed(3);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_ADSB_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_ADSB_HOST,
      },
    };

    fetch(
      `https://adsbexchange-com1.p.rapidapi.com/v2/lat/${latT}/lon/${lonT}/dist/5/`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPlanes(response))
      .catch((err) => window.alert(err));
  };

  const numPlanes = planes.ac;

  return (
    <div className="App">
      <header className="App-header">
        <UserLocation location={location} />
        <center>
          <button onClick={fetchPlanes}>Find Planes!</button>
        </center>
      </header>

      <div id="results">
        <div id="overview">
          <br />
          {!planes.ac ? (
            <h3>There seems to be nothing in your airspace!</h3>
          ) : (
            <PlaneCount planes={planes} />
          )}
          <br />
        </div>

        <div id="planes">
          {!planes.ac
            ? ''
            : planes.ac.map((p, index) => (
                <Plane key={index} flight={p} className="flight" />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
