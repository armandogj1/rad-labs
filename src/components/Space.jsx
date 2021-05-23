import PropTypes from 'prop-types';
import Radiator from './Radiator';
import Header from './Header';
import useOpen from '../hooks/useOpen';
import '../styles/Space.css';

function Space(props) {
  const { name, radiators } = props;
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className='space' onClick={toggleOpen}>
      <Header {...props} isOpen={isOpen} Heading={'h5'} label={'Space'} />
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
