/*
*Gets the first element of array.
*
* _.head([1, 2, 3]);
// => 1

_.head([]);
// => undefined
* */

const getFirst=(arr)=>{
  return arr[0];
};

console.log(getFirst([1, 2, 3]));

console.log(getFirst([]));