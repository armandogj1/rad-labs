import PropTypes from 'prop-types';
import RadiatorNode from './Node';

function NodeList({ nodes }) {
  return nodes.map((node, i) => {
    return <RadiatorNode {...node} />;
  });
}

NodeList.propTypes = {
  nodes: PropTypes.array,
};

export default Node;
