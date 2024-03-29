/*
  Node structure
  {
    "last_message": 1617840671000,
    "lora_euid": "D1E720CCCC347E6F",
    "radiator_temperature": 215,
    "room_temperature": 71
  },
*/

/**
 * @param {object} node - object containing node information
 * @param {number} retrieved_at - time from last fetch
 * @return {string} - string indicating status of node
 */
function evaluateNode(node, retrieved_at) {
  const { last_message, lora_euid, radiator_temperature, room_temperature } = node;

  if (!last_message && !radiator_temperature && !room_temperature && !lora_euid)
    return 'INVALID_NODE';

  // TODO: What time gap is considered to be offline
  // ten minutes
  if (retrieved_at - last_message > 1000 * 60 * 10) return 'NODE_OFFLINE';

  // TODO: ask what is the threshold for considering a radiator cold
  const tempDiff = radiator_temperature - room_temperature;
  if (tempDiff <= 50) return 'NO_STEAM';

  return 'VALID_NODE';
}

export default evaluateNode;

/*
Boiling Temp in F is 212
  - radiator closer to room temp is not receiving steam
If node is missing fields it is invalid
*/
