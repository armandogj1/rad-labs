import PropTypes from 'prop-types';
import useOpen from '../hooks/useOpen';
import formatTime from '../utils/formatTime';
import '../styles/Dropdown.css';

function Dropdown({ data }) {
  const { isOpen, toggleOpen } = useOpen();

  const { retrieved_at, name, node_count, statuses } = data;

  return (
    <div className='dropdown'>
      <button onClick={toggleOpen}>Info</button>
      {isOpen && (
        <aside className='dropdown-modal'>
          <p>{name}</p>
          <p>Retrieval Time: {new Date(retrieved_at).toString()}</p>
          <p>Retrieval Time: {formatTime(retrieved_at)}</p>
          <p>Total Node Count: {node_count}</p>
          <p>Statuses: {statuses.join(', ')}</p>
        </aside>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.object,
};

export default Dropdown;
