import PropTypes from 'prop-types';
import Unit from './Unit';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import { useRetrieveTime } from '../hooks/useRetrieveTime';
import evaluateChildren from '../utils/evaluateChildren.js';
import Status from './Status';
import '../styles/Level.css';

function Level(props) {
  const { level, name, spaces, units } = props;
  const { isOpen, toggleOpen } = useOpen();
  const { retrieved_at } = useRetrieveTime();
  const statuses = evaluateChildren(props, retrieved_at);

  return (
    <div className='level' onClick={toggleOpen}>
      <h3>Level: {name}</h3>
      <Status statuses={[...statuses]} />
      {isOpen && (
        <>
          {!!spaces.length && (
            <SpaceList key={`level-${name}-spaces`} name={name} spaces={spaces} />
          )}
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
