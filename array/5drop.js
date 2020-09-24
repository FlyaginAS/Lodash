/**
 *Creates a slice of array with n elements dropped from the beginning.

 _.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
 */

const drop = (arr, quan = 1) => {
  return arr.slice(quan);
};

console.log(drop([1, 2, 3]));

console.log(drop([1, 2, 3], 2));

console.log(drop([1, 2, 3], 5));

console.log(drop([1, 2, 3], 0));
