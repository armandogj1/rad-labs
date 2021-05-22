import PropTypes from 'prop-types';
import SpaceList from './SpaceList';

function Unit({ name, spaces }) {
  return (
    <div className='unit'>
      <h3>{name}</h3>
      <SpaceList spaces={spaces} name={name} />
    </div>
  );
}

Unit.propTypes = {
  name: PropTypes.string,
  spaces: PropTypes.array,
};

export default Unit;
