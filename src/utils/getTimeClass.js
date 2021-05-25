/**
 * Helper to get a class to add to elements
 * @param {number} milliseconds - time in milliseconds
 * @param {number} retrieved_at - time in milliseconds of last fetch
 * @returns {string} - class to add to element
 */
function getTimeClass(milliseconds, retrieved_at) {
  const diff = (retrieved_at - milliseconds) / 1000;

  if (diff >= 432000) {
    /* 5 and up  days */
    return 'five-up-days';
  } else if (diff >= 172800) {
    /* 2 and up days */
    return 'two-up-days';
  } else if (diff >= 86400) {
    /* 1 day */
    return 'one-day';
  } else if (diff >= 43200) {
    /* 12 hours */
    return 'twelve-hours';
  } else if (diff >= 10800) {
    /* 3 hours up */
    return 'three-hours';
  } else if (diff >= 3600) {
    /* 1 hour */
    return 'one-hour';
  } else if (diff > 600) {
    /* 10 minutes up */
    return 'ten-minutes';
  }

  return '';
}

export default getTimeClass;
