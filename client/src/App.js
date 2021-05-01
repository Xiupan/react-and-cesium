import React from 'react';
import { Viewer, GeoJsonDataSource } from 'resium';

const App = () => {
  const data = {
    type: 'Feature',
    properties: {
      name: 'Lincoln Heights',
      'building type': 'Apartment Complex',
      message: 'I live here!',
    },
    geometry: {
      type: 'Point',
      coordinates: [-95.38015, 29.80434],
    },
  };

  return (
    <Viewer full>
      <GeoJsonDataSource data={data} />
    </Viewer>
  );
};
export default App;
