function countChar(str, ch, res = 0){
  if(typeof(str) !== 'string' || str === '' ) return res;
  if(str[0] === ch) return countChar(str.slice(1), ch, res+1);
  return countChar(str.slice(1), ch, res);
}
console.log(countChar('kakkerlak', 'k'));

function countBs(str) {
    return countChar(str, 'B');
  }
console.log(countBs('BAKJGBORBV'));