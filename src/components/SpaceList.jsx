import PropTypes from 'prop-types';
import Space from './Space';

function SpaceList({ spaces, name }) {
  return (
    <div className='spaces'>
      {spaces.map((space, idx) => (
        <Space key={`${name}-${space.name}-${idx}`} {...space} />
      ))}
    </div>
  );
}

SpaceList.propTypes = {
  spaces: PropTypes.array,
  name: PropTypes.string,
};

export default SpaceList;
