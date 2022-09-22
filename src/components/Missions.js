import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../css/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="MissoesContainer" data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }, index) => (
          <MissionCard
            key={ index }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
