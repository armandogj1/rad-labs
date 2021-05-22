import PropTypes from 'prop-types';
import Radiator from './Radiator';

function Space({ name, radiators }) {
  return (
    <div className='space'>
      <h3>{name}</h3>
      {radiators.map((radiator, idx) => (
        <Radiator key={`${name}-${idx}`} {...radiator} />
      ))}
    </div>
  );
}

Space.propTypes = {
  name: PropTypes.string,
  radiators: PropTypes.array,
};

export default Space;
