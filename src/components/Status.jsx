import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import '../styles/Status.css';

function Status({ statuses, status }) {
  if (status) {
    return (
      <div className='statuses'>
        <span key={uuid()} className={`status ${status}`}></span>
      </div>
    );
  }

  return (
    <div className='statuses'>
      {statuses.map((status) => (
        <span key={uuid()} className={`status ${status}`}></span>
      ))}
    </div>
  );
}

Status.propTypes = {
  statuses: PropTypes.array,
  status: PropTypes.string,
};

export default Status;
