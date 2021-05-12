export const cidrToMaskFunction = (value) => {
  const usageVal = +value
  if ( !usageVal || usageVal > 32 || usageVal < 1 || typeof(usageVal) === 'string') {
    return 'Invalid';
  }
  let mask = [], i, n;
  for(i = 0; i < 4; i++) {
    n = Math.min(value, 8);
    mask.push(256 - Math.pow(2, 8-n));
    value -= n;
  }
  return mask.join('.');
}
