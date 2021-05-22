import PropTypes from 'prop-types';
import Radiator from './Radiator';
import '../styles/Space.css';

function Space({ name, radiators }) {
  return (
    <div className='space'>
      <h3>{name}</h3>
      <div className='radiator-list'>
        {radiators.map((radiator, idx) => (
          <Radiator key={`${name}-${idx}`} {...radiator} />
        ))}
      </div>
    </div>
  );
}

Space.propTypes = {
  name: PropTypes.string,
  radiators: PropTypes.array,
};

export default Space;
