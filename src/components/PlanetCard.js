import React from 'react';
import PropTypes from 'prop-types';
import '../css/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <>
        <hr className="linha" />
        <div className="planet-card" data-testid="planet-card">
          <img
            className={ planetName }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
          <div className="NameContainer">
            <p className="PlanetName" data-testid="planet-name">{planetName}</p>
          </div>
        </div>
      </>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
