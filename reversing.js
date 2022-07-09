 function reverseArray(array) {
     let arr = [];
     for(let i=array.length-1; i>=0; i--){
         arr.push(array[i]);
     }
     return arr;
 }
 function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
 console.log(reverseArray(["a","b","c"]));
