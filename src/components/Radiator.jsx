import PropTypes from 'prop-types';
import RadiatorNode from './RadiatorNode';
import useOpen from '../hooks/useOpen';
import '../styles/Radiator.css';

function Radiator({ nodes, number }) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className='radiator' onClick={toggleOpen}>
      <h3>Radiator: #{number}</h3>
      {isOpen && (
        <div className='radiator-node-list'>
          {nodes.length ? (
            nodes.map((node) => {
              const { lora_euid } = node;
              return <RadiatorNode key={lora_euid} {...node} />;
            })
          ) : (
            <p className='NO_NODES'>No nodes</p>
          )}
        </div>
      )}
    </div>
  );
}

Radiator.propTypes = {
  number: PropTypes.number,
  nodes: PropTypes.array,
};

export default Radiator;
