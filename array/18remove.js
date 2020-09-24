/*
*Removes all elements from array that predicate returns truthy for and returns
*  an array of the removed elements.
*  The predicate is invoked with three arguments: (value, index, array).
*
*var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
*
* */

const remove=(arr, func)=>{
  let removed=[];

  arr.map((item)=>{
    if(func(item)){
      //find index
      let index=arr.findIndex((item2)=>{
        return item2===item;
      });
      //splice item by index

      removed.push(...arr.splice(index,1));
    }
  });

  return removed;
};

let array = [1, 2, 3, 4];
let func=function(n) {
  return n % 2 === 0;
};


 console.log(remove(array, func));

console.log(array);