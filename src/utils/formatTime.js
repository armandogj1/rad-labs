// TODO: Add st/nd/rd/th to day

/**
 * @param {number} mils - time in milliseconds
 * @return {string} - formatted date string
 */
function formatTime(mils) {
  const date = new Date(mils);

  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const month = date.toLocaleString('en-US', { month: 'long', day: 'numeric' });

  const year = date.getFullYear();

  return `${time} on ${month} ${year}`;
}

export default formatTime;
