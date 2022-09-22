import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div className="SolarSystem" data-testid="solar-system">
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
