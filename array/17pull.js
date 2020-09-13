/*
*Removes all given values from array
*  this method mutates array
*
*var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
*
*
* */

const pull=(arr, ...args)=>{
  let copy=[];
  for(let i=0;i<arr.length; i++){
    if(!args.includes(arr[i])){
      copy.push(arr[i]);
    }
  }
  return arr=copy;
};
let array = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log(pull(array, 'a', 'c'));
