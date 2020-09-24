/*
* Creates a slice of array with n elements taken from the beginning.
*
*_.take([1, 2, 3]);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => []
*
* */

const take=(arr, num=1)=>{
  return arr.slice(0, num);
};
console.log(take([1, 2, 3]));
// => [1]

console.log(take([1, 2, 3], 2));
// => [1, 2]

console.log(take([1, 2, 3], 5));
// => [1, 2, 3]

console.log(take([1, 2, 3], 0));
// => []