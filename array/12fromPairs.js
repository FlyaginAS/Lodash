/*
*method returns an object composed from key-value pairs.
*
* _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
* */

const fromPairs=(arr)=>{
  let obj={};
  arr.forEach((pair)=>{obj[pair[0]]=pair[1];})
    return obj;

};

console.log(fromPairs([['a', 1], ['b', 2]]));