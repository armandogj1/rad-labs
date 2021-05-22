import evaluateNode from './evaluateNode';

/**
 * Recursively check children to find all statuses in tree
 * @param {object} element - object containing nested objects or a radiator node
 * @param {number} retrieved_at - time from last fetch
 * @return {string} - string indicating status of child nodes
 */
function evaluateChildren(element, retrieved_at = 1617840940000, statuses = new Set()) {
  if (element.lora_euid !== undefined) {
    statuses.add(evaluateNode(element, retrieved_at));
    return;
  }

  for (let property in element) {
    if (Array.isArray(element[property])) {
      for (let child of element[property]) {
        evaluateChildren(child, retrieved_at, statuses);
      }
    }
  }

  return statuses;
}

export default evaluateChildren;
