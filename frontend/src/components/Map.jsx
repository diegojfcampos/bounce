// src/components/Map.jsx
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
  const center = { lat: latitude, lng: longitude };
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.panTo(center);
    }
  }, [center, map]);

  const handleApiLoaded = (map, maps) => {
    setMap(map);
  };

  return (
    <div style={{ height: '400px', width: '300px' }} className="rounded-md overflow-hidden shadow-md">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API }} 
        defaultCenter={center}
        defaultZoom={5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        key={`${latitude}-${longitude}`} 
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
