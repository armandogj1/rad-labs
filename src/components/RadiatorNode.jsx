import PropTypes from 'prop-types';
import formatTime from '../utils/formatTime';
import { useRetrieveTime } from '../hooks/useRetrieveTime';
import calculateTime from '../utils/calculateTime';
import getTemperatureClass from '../utils/getTemperatureClass';

function RadiatorNode(props) {
  const { retrieved_at } = useRetrieveTime();
  const { last_message, lora_euid, radiator_temperature, room_temperature, status } =
    props;

  if (status === 'INVALID_NODE') {
    return (
      <div className='node' data-testid='radiator-node'>
        <p>INVALID NODE</p>
      </div>
    );
  }

  return (
    <div className='node' data-testid='radiator-node'>
      <h5>ID: {lora_euid}</h5>
      <p>Radiator Temperature: {radiator_temperature} F</p>
      <p>
        Room Temperature:{' '}
        <span className={getTemperatureClass(room_temperature)}>{room_temperature}</span>{' '}
        F
      </p>
      <p>Date: {formatTime(last_message)}</p>
      <p>Last Message: {calculateTime(retrieved_at, last_message)}</p>
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
