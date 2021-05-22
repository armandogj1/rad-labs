import PropTypes from 'prop-types';
import RadiatorNode from './Node';

function Radiator({ nodes, number }) {
  return (
    <div className='radiator'>
      <h3>{number}</h3>
      {nodes.map((node) => {
        const { lora_euid } = node;
        return <RadiatorNode key={lora_euid} {...node} />;
      })}
    </div>
  );
}

Radiator.propTypes = {
  nodes: PropTypes.array,
};

export default Radiator;
