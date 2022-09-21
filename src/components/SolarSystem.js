import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system"> </div>
      </>
    );
  }
}

export default SolarSystem;
