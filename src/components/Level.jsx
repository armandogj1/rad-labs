import PropTypes from 'prop-types';
import Unit from './Unit';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import '../styles/Level.css';

function Level({ level, name, spaces, units }) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className='level' onClick={toggleOpen}>
      <h3>Level: {name}</h3>
      {isOpen && (
        <>
          <SpaceList key={`level-${name}-spaces`} name={name} spaces={spaces} />
          <div className='unit-list'>
            {units.map((unit, idx) => (
              <Unit key={`level:${name}-unit:${unit.name}`} {...unit} />
            ))}
          </div>
        </>
      )}
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
