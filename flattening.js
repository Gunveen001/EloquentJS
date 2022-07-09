let arrays = [[1,2,4],[4,5],[6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []))