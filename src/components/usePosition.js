/*
  The following is taken from Oleksii Trekhleb's post and work on the usePosition hook here: https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de

  This is just an implementation of that fuction for my own understanding.
*/

import { useState, useEffect } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation not supported');
      return;
    }

    let watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
