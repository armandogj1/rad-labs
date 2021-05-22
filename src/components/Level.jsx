import PropTypes from 'prop-types';
import Unit from './Unit';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import evaluateChildren from '../utils/evaluateChildren.js';
import Status from './Status';
import '../styles/Level.css';

// TODO: Replace with context using hook
const retrieved_at = 1617840940000;

function Level(props) {
  const { level, name, spaces, units } = props;
  const { isOpen, toggleOpen } = useOpen();
  const statuses = evaluateChildren(props, retrieved_at);

  console.log(statuses);

  return (
    <div className='level' onClick={toggleOpen}>
      <h3>Level: {name}</h3>
      <Status statuses={[...statuses]} />
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
