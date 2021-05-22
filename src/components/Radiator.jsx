import PropTypes from 'prop-types';
import RadiatorNode from './RadiatorNode';
import '../styles/Radiator.css';

function Radiator({ nodes, number }) {
  return (
    <div className='radiator'>
      <h3>Radiator: #{number}</h3>
      <div className='radiator-node-list'>
        {nodes.length ? (
          nodes.map((node) => {
            const { lora_euid } = node;
            return <RadiatorNode key={lora_euid} {...node} />;
          })
        ) : (
          <p>No nodes</p>
        )}
      </div>
    </div>
  );
}

Radiator.propTypes = {
  number: PropTypes.number,
  nodes: PropTypes.array,
};

export default Radiator;
