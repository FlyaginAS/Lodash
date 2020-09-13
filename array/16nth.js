/*
* Gets the element at index n of array. If n is negative, the nth element from the end is returned.


*var array = ['a', 'b', 'c', 'd'];

_.nth(array, 1);
// => 'b'

_.nth(array, -2);
// => 'c';
*
*
* */

const nth=(arr, n)=>{
  return n>0 ? arr[n] : arr[arr.length+n];
};
let array = ['a', 'b', 'c', 'd'];

console.log(nth(array, 1));

console.log(nth(array, -2));