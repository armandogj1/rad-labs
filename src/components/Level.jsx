import PropTypes from 'prop-types';
import Unit from './Unit';
import SpaceList from './SpaceList';

function Level({ level, name, spaces, units }) {
  return (
    <div>
      <h3>{name}</h3>
      <SpaceList key={`level-${name}-spaces`} name={name} spaces={spaces} />
      <div className='unit-list'>
        {units.map((unit, idx) => (
          <Unit key={`level:${name}-unit:${unit.name}`} {...unit} />
        ))}
      </div>
    </div>
  );
}

Level.propTypes = {
  level: PropTypes.number,
  name: PropTypes.string,
  spaces: PropTypes.array,
  units: PropTypes.array,
};

export default Level;
