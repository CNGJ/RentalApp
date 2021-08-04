const countNights = (from: any, to: any): number => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((from - to) / oneDay));

  return diffDays;
};

export default {
  countNights
};
