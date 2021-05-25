import evaluateNode from './evaluateNode';

/**
 * @param {object} data - tree or radiator node
 * @param {number} retrieved_at - time in milliseconds
 * @return {array} - extended tree containing count and status
 */
function extendData(data, retrieved_at) {
  if (typeof data !== 'object') return;
  if (data.lora_euid !== undefined) {
    const status = evaluateNode(data, retrieved_at);
    data.status = status;
    return status;
  }

  data.node_count = data.node_count || 0;
  const statuses = [];
  let noNodes = false;
  // iterate over poperties of data
  for (let key in data) {
    const value = data[key];

    if (key === 'nodes' && !value.length) {
      noNodes = true;
    } else if (Array.isArray(value)) {
      for (let innerValue of value) {
        const innerStatuses = extendData(innerValue, retrieved_at);

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
