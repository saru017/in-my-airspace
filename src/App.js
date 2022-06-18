import './App.css';
import { useState } from 'react';
import Plane from './components/Plane';
import UserLocation from './components/UserLocation';
import { usePosition } from './components/usePosition';
import { config } from './config';
import PlaneCount from './components/PlaneCount';

function App() {
  const location = usePosition();

  const [planes, setPlanes] = useState([]);
  const fetchPlanes = async () => {
    const latT = location.latitude.toFixed(3);
    const lonT = location.longitude.toFixed(3);
    const options = {
      method: config.method,
      headers: config.headers,
    };

    fetch(
      `https://adsbexchange-com1.p.rapidapi.com/v2/lat/${latT}/lon/${lonT}/dist/5/`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPlanes(response))
      .catch((err) => console.error(err));
  };

  const numPlanes = planes.ac;
  //console.log(numPlanes);

  return (
    <div className="App">
      <header className="App-header">
        <UserLocation location={location} />
      </header>

      <div className="planes">
        <center>
          <button onClick={fetchPlanes}>Find Planes!</button>
        </center>
        <br />
        <PlaneCount planes={planes} />
        <br />
        {!planes.ac
          ? ''
          : planes.ac.map((p) => <Plane flight={p} className="flight" />)}
      </div>
    </div>
  );
}

export default App;
