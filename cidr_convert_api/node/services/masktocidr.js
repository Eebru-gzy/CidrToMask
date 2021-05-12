export const maskToCidrFunction = (value) => {
  var cidr = '';
  let arr = value.split('.');
  if (arr.length == 1) {
    return 'Invalid';
  }
  for (let m of arr) {
    let numVal = parseInt(m)
    if (isNaN(numVal)) {return 'Invalid'}
    if (numVal > 255) {return 'Invalid'} 
    if (numVal > 0 && numVal < 128) {return 'Invalid'}
    cidr+=(numVal >>> 0).toString(2)
  }
  return cidr.split('1').length-1;
}
