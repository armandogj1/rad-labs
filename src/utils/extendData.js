import evaluateNode from './evaluateNode';
import capitalizeAndSingularize from './capitalizeAndSingularize';

// TODO: fix type naming
/**
 * @param {object} data - tree or radiator node
 * @param {number} retrieved_at - time in milliseconds
 * @param {string} type - the property name passed as type
 * @return {array} - extended tree containing count and status
 */
function extendData(data, retrieved_at, type = 'Building') {
  if (typeof data !== 'object') return;
  if (data.lora_euid !== undefined) {
    const status = evaluateNode(data, retrieved_at);
    data.status = status;
    data.type = capitalizeAndSingularize(type);
    return status;
  }

  data.type = type;
  data.node_count = data.node_count || 0;
  const statuses = [];
  let noNodes = false;
  // iterate over poperties of data
  for (let key in data) {
    const value = data[key];

    if (key === 'nodes' && !value.length) {
      noNodes = true;
    } else if (Array.isArray(value)) {
      const innerType = capitalizeAndSingularize(key);
      for (let innerValue of value) {
        const innerStatuses = extendData(innerValue, retrieved_at, innerType);

        if (Array.isArray(innerStatuses)) {
          statuses.push(...innerStatuses);
        } else if (!!innerStatuses) {
          statuses.push(innerStatuses);
        }
      }
    }
  }

  data.node_count = statuses.length;
  noNodes && statuses.push('NO_NODES');
  data.statuses = [...new Set(statuses)];
  return statuses;
}

export default extendData;
