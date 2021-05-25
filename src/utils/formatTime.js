/* Helper */
/**
 *
 * @param {string} date - date string in 'MONTH dayNum'
 */
function addOrdinal(date) {
  const lastDigit = date[date.length - 1];
  let ordinal;

  switch (lastDigit) {
    case '1':
      ordinal = 'st';
      break;
    case '2':
      ordinal = 'nd';
      break;
    case '3':
      ordinal = 'rd';
      break;
    default:
      ordinal = 'th';
  }

  return `${date}${ordinal}`;
}

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
    timeZone: 'America/New_York',
  });

  const month = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York',
  });

  const year = date.getFullYear();

  return `${time} on ${addOrdinal(month)} ${year} EST`;
}

export default formatTime;
