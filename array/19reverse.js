/*
* Reverses array so that the first element becomes the last,
* the second element becomes the second to last, and so on.
*
*var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
*
* */

const reverse=(arr)=>{
  arr=arr.reverse();
};

let array = [1, 2, 3];
reverse(array);

console.log(array);
