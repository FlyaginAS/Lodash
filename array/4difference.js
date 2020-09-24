/**
 * Creates an array of array values not included in the other 
 * given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by
 *  the first array.

 _.difference([2, 1], [2, 3]);
// => [1]
 */

const difference = (arr1, arr2) => {
  let result = [];
  //для каждого элемента массива смотрим, есть ли он во втором массиве, если нет-пишем в результирующий

  arr1.forEach((item) => {
    arr2.includes(item) ? 0 : result.push(item);
  });

  return result;
};

console.log(difference([2, 1], [2, 3]));
