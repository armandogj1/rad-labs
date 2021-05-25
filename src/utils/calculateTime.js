/**
 * Helper to pluralize string
 * @param {number} number - number to check
 * @returns {string} - returns empty string or 's'
 */
function numberEnding(number) {
  return number > 1 ? 's' : '';
}

/**
 * @param {number} retrieved_at - retrieval time in milliseconds
 * @param {number} last_message - last time node communicated
 * @return {string} - human readable time since last communication
 */
function calculateTime(retrieved_at, last_message) {
  const diff = (retrieved_at - last_message) / 1000;

  let days = Math.floor(diff / 86400);
  if (days) {
    return days + ' day' + numberEnding(days);
  }
  let hours = Math.floor(diff / 3600);
  if (hours) {
    return hours + ' hour' + numberEnding(hours);
  }
  let minutes = Math.floor(diff / 60);
  if (minutes) {
    return minutes + ' minute' + numberEnding(minutes);
  }
  let seconds = Math.floor(diff / 60);
  if (seconds) {
    return seconds + ' second' + numberEnding(seconds);
  }
  return 'less than a second';
}

export default calculateTime;
