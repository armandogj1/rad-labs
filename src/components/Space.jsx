import PropTypes from 'prop-types';
import Radiator from './Radiator';
import useOpen from '../hooks/useOpen';
import '../styles/Space.css';

function Space({ name, radiators }) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className='space' onClick={toggleOpen}>
      <h3>{name}</h3>
      {isOpen && (
        <div className='radiator-list'>
          {radiators.map((radiator, idx) => (
            <Radiator key={`${name}-${idx}`} {...radiator} />
          ))}
        </div>
      )}
    </div>
  );
}

Space.propTypes = {
  name: PropTypes.string,
  radiators: PropTypes.array,
};

export default Space;
