import PropTypes from 'prop-types';
import Radiator from './Radiator';
import Status from './Status';
import useOpen from '../hooks/useOpen';
import { useRetrieveTime } from '../hooks/useRetrieveTime';
import evaluateChildren from '../utils/evaluateChildren.js';
import '../styles/Space.css';

function Space(props) {
  const { name, radiators } = props;
  const { isOpen, toggleOpen } = useOpen();
  const { retrieved_at } = useRetrieveTime();
  const statuses = evaluateChildren(props, retrieved_at);

  return (
    <div className='space' onClick={toggleOpen}>
      <h3>{name}</h3>
      <Status statuses={[...statuses]} />
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
