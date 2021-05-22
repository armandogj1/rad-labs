import PropTypes from 'prop-types';
import SpaceList from './SpaceList';
import useOpen from '../hooks/useOpen';
import Status from './Status';
import evaluateChildren from '../utils/evaluateChildren.js';
import '../styles/Unit.css';

function Unit(props) {
  const { name, spaces } = props;
  const { isOpen, toggleOpen } = useOpen();
  const statuses = evaluateChildren(props);

  return (
    <div className='unit' onClick={toggleOpen}>
      <h3>Unit: {name}</h3>
      <Status statuses={[...statuses]} />
      {isOpen && <SpaceList spaces={spaces} name={name} />}
    </div>
  );
}

Unit.propTypes = {
  name: PropTypes.string,
  spaces: PropTypes.array,
};

export default Unit;
