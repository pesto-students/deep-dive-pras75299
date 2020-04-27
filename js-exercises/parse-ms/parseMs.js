const parseMs = (milliseconds) => {
  if (typeof milliseconds !== "number") {
    throw new TypeError(`Expected Number got ${typeof milliseconds}`);
  }

  const roundNumberTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

  return {
    days: roundNumberTowardsZero(milliseconds / 86400000),
    hours: roundNumberTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundNumberTowardsZero(milliseconds / 60000) % 60,
    seconds: roundNumberTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundNumberTowardsZero(milliseconds) % 1000,
    microseconds: roundNumberTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundNumberTowardsZero(milliseconds * 1e6) % 1000,
  };
};

export { parseMs };
