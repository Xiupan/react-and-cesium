import React from 'react';
import { Viewer, CzmlDataSource } from 'resium';
import czml from 'czml-writer';

const App = () => {
  const orbit = new czml.orbit.fromParams({
    apogee: 426.9, // km
    perigee: 416.2, // km
    inclination: 51.65, // deg
    rightAscension: 304.1, // deg
    argumentOfPeriapsis: 117.8, // deg
  });
  const output = orbit.czml();
  console.log(output);

  return (
    <Viewer shouldAnimate full>
      <CzmlDataSource data={output} />
    </Viewer>
  );
};
export default App;
