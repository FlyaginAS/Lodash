/**
 *Fills elements of array with value
  from start up to, but not including, end.

  var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
 */

const fill = (arr, ins, start = 0, end = arr.length) => {
  for (let i = start; i < end; i++) {
    arr.splice(i, 1, ins);
  }
  return arr;
};

console.log(fill([1, 2, 3], 'a'));

console.log(fill(Array(3), 2));

console.log(fill([4, 6, 8, 10], '*', 1, 3));
