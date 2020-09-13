/*
*If fromIndex is negative, it's used as the offset from the end of array.
*
*_.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
* */

const indexOf=(arr, x, i=0)=> {
  //создать копию массива, начиная с заданного индекса
  let copy = arr.slice();
 for(l=0;l<i;l++){
   copy[l]=undefined;
 }
  //произвести поиск числа в массиве
  let index = copy.findIndex((item) => {
    return item===x ;
  });
  return index;
};

console.log(indexOf([1, 2, 1, 2], 2));

console.log(indexOf([1, 2, 1, 2], 2, 2));