/**
 * @param {any} value - value to check if undefined
 * @return {boolean} - return true for anything not null or undefined
 */

function exists(value) {
  return !(value === undefined || value === null);
}

export default exists;
