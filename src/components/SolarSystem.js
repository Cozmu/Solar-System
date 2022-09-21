import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system">
          {planets
            .map(({ name, image }) => (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
        </div>

      </>
    );
  }
}

export default SolarSystem;
