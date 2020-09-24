/*
*Flattens array a single level deep.
*
* _.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]


* */

const flatten=(arr)=>{
  let flatArr=[];
  arr.forEach((item)=>{
    if(Array.isArray(item)){

      flatArr=[...flatArr,...item];
    } else {
      flatArr.push(item);
    }

  });
  return flatArr;
};

console.log(flatten([1, [2, [3, [4]], 5]]));

console.log(flatten([]));

console.log(flatten([[1,2,3]]));