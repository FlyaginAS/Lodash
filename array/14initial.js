/*
*Gets all but the last element of array.
*
*_.initial([1, 2, 3]);
// => [1, 2]
*
* */

const initial=(arr)=>{
  return arr.slice(0,arr.length-1);
};

console.log(initial([1, 2, 3]));