import PropTypes from 'prop-types';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import '../styles/Unit.css';

function Unit({ name, spaces }) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className='unit' onClick={toggleOpen}>
      <h3>Unit: {name}</h3>
      {isOpen && <SpaceList spaces={spaces} name={name} />}
    </div>
  );
}

Unit.propTypes = {
  name: PropTypes.string,
  spaces: PropTypes.array,
};

export default Unit;
