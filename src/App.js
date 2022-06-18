import './App.css';
import { useState } from 'react';
import Plane from './components/Plane';
import UserLocation from './components/UserLocation';
import { usePosition } from './components/usePosition';
import { config } from './config';

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
      `https://adsbexchange-com1.p.rapidapi.com/v2/lat/${latT}/lon/${lonT}/dist/10/`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPlanes(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserLocation location={location} />
      </header>
      <body>
        <div className="planes">
          <button onClick={fetchPlanes}>Find Planes!</button>
          <br />
          {!planes.ac
            ? ''
            : planes.ac.map((p) => <Plane flight={p} className="flight" />)}
        </div>
      </body>
    </div>
  );
}

export default App;
