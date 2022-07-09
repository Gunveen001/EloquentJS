function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) arr.push(i);
    } else {
      for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
  }
  
  function sum(arr) {
    let result = 0;
    for (let i of arr) {
      result += i;
    }
    return result;
  }
  
  console.log(range(1, 10))
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));
  