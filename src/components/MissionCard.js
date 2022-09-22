import React from 'react';
import PropTypes from 'prop-types';
import '../css/MissionCard.css';
import calendario from '../images/calendario.png';
import local from '../images/local.png';
import bandeira from '../images/bandeira.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="cards" data-testid="mission-card">
        <section className="Name">
          <p data-testid="mission-name">{name}</p>
        </section>
        <hr />
        <section className="Missao">
          <img
            height={ 18 }
            width={ 18 }
            src={ calendario }
            alt="calendario"
          />
          <div className="calendario">
            <p data-testid="mission-year">{year}</p>
          </div>
          <img
            height={ 21 }
            width={ 18 }
            src={ local }
            alt="local"
          />
          <div className="local">
            <p data-testid="mission-country">{country}</p>
          </div>
          <img
            height={ 19 }
            width={ 15 }
            src={ bandeira }
            alt="bandeira"
          />
          <div className="bandeira">
            <p data-testid="mission-destination">{destination}</p>
          </div>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
