import PropTypes from 'prop-types';
import Level from './Level';

function FloorList({ floors }) {
  return (
    <div className='floors'>
      {floors.map((floor, idx) => (
        <Level key={`floor:${idx}`} {...floor} />
      ))}
    </div>
  );
}

FloorList.propTypes = {
  floors: PropTypes.array,
};

export default FloorList;
