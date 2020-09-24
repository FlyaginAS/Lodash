/*
*Converts all elements in array into a string separated by separator.
*
*_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
*
* */

const join=(arr, separ)=>{
  return arr.join(separ);

};

console.log(join(['a', 'b', 'c'], '~'));