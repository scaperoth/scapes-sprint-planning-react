/**
 * converts given seconds to a javascript date
 */
export const secondsToDate = secs => new Date(secs * 1000);
export const secondsToDateString = secs => secondsToDate(secs).toDateString();
