import PropTypes from 'prop-types';
import Status from './Status';
import '../styles/Widget.css';

function Widget({ statuses, nodeCount }) {
  if (!statuses) return null;
  return (
    <div className='widget'>
      <h3>Nodes: {nodeCount}</h3>
      <Status statuses={statuses} />
    </div>
  );
}

Widget.propTypes = {
  statuses: PropTypes.array,
  nodeCount: PropTypes.number,
};

export default Widget;
