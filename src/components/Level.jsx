import PropTypes from 'prop-types';
import Unit from './Unit';
import SpaceList from './SpaceList';
import Header from './Header';
import useOpen from '../hooks/useOpen';
import { useRetrieveTime } from '../hooks/useRetrieveTime';
import evaluateChildren from '../utils/evaluateChildren.js';
import Status from './Status';
import '../styles/Level.css';

function Level(props) {
  const { level, name, spaces, units } = props;
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className='level' onClick={toggleOpen}>
      <Header {...props} isOpen={isOpen} Heading={'h3'} label={'Level'} />
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
