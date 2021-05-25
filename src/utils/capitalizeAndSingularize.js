/**
 * @param {string} type - string to format
 * @return {string} - formated string capitalized and singular
 */
function capitalizeAndSingularize(type) {
  if (!type.length) return type;
  if (type.length === 1) {
    return type.toUpperCase();
  }
  const typeArr = type.toLowerCase().split('');

  if (typeArr[typeArr.length - 1] === 's') {
    typeArr.pop();
  }

  typeArr[0] = typeArr[0].toUpperCase();

  return typeArr.join('');
}

export default capitalizeAndSingularize;
