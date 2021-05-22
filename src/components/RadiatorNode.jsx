import PropTypes from 'prop-types';
import evaluateNode from '../utils/evaluateNode.js';

function RadiatorNode(props) {
  // const { retrieved_at } = useBuildingData();
  const retrieved_at = 1617840940000;
  const nodeStatus = evaluateNode(props, retrieved_at);
  const { last_message, lora_euid, radiator_temperature, room_temperature } = props;

  if (nodeStatus === 'INVALID_NODE') {
    return (
      <div className={nodeStatus}>
        <p>INVALID NODE</p>
      </div>
    );
  }

  return (
    <div className={nodeStatus}>
      <h4>{lora_euid}</h4>
      <p>{radiator_temperature}</p>
      <p>{room_temperature}</p>
      <p>{last_message}</p>
    </div>
  );
}

RadiatorNode.propTypes = {
  last_message: PropTypes.number,
  lora_euid: PropTypes.string,
  radiator_temperature: PropTypes.number,
  room_temperature: PropTypes.number,
};

export default RadiatorNode;
