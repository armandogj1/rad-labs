import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import formatTime from '../utils/formatTime';
import '../styles/MainHeader.css';

function MainHeader({ data }) {
  return (
    <nav className='main-header'>
      <ul>
        <Dropdown label={'Info'}>
          <div className='info'>
            <p>{data.name}</p>
            <p>Retrieval Time: {formatTime(data.retrieved_at)}</p>
            <p>Total Node Count: {data.node_count}</p>
            <p>Statuses: {data.statuses.join(', ')}</p>
          </div>
        </Dropdown>
        <Dropdown label={'Reference'}>
          <div className='reference'>
            <span className='dropdown-entry'>
              <p>Hot: </p>
              <div className='HOT status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Warm: </p>
              <div className='WARM status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Cozy: </p>
              <div className='COZY status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Cold: </p>
              <div className='COLD status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Valid: </p>
              <div className='VALID_NODE status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Invalid: </p>
              <div className='INVALID_NODE status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>Offline: </p>
              <div className='NODE_OFFLINE status'></div>
            </span>
            <span className='dropdown-entry'>
              <p>No Nodes: </p>
              <div className='NO_NODES status'></div>
            </span>
          </div>
        </Dropdown>
      </ul>
    </nav>
  );
}

MainHeader.propTypes = {
  data: PropTypes.object,
};

export default MainHeader;
