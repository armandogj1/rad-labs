import PropTypes from 'prop-types';
import '../styles/Status.css';

function Status({ statuses }) {
  return (
    <div className='statuses'>
      {statuses.map((status, idx) => (
        <span key={`status-${status}`} className={`status ${status}`}></span>
      ))}
    </div>
  );
}

Status.propTypes = {
  statuses: PropTypes.array,
};

export default Status;
