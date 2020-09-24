/*
*Gets all but the first element of array.
*
*_.tail([1, 2, 3]);
// => [2, 3]
*
* */

const tail=(arr)=>{
  let copy=[...arr];
  copy.shift();
  return copy;
};

let array=[1, 2, 3];
console.log(tail(array));
console.log(array);

