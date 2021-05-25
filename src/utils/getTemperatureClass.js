/**
 * Get class for room temperature color scheme
 * @param {number} room_temperature - room temperature
 * @returns {string} - string to apply as className
 */
function getTemperatureClass(room_temperature) {
  if (room_temperature > 80) {
    return 'HOT';
  } else if (room_temperature >= 75) {
    return 'WARM';
  } else if (room_temperature >= 70) {
    return 'COZY';
  }

  return 'COLD';
}

export default getTemperatureClass;
