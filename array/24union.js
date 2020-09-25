/**
 *Creates an array of unique values, in order, from all given arrays
 *
 *
 *
 */
const union = (...arrays) => {
  let result = [];
  arrays.forEach((array) => {
    array.forEach((item) => {
      if (result.indexOf(item) < 0) {
        result.push(item);
      }
    });
  });
  return result;
};

console.log(union([2], [1, 2]));
// => [2, 1]
console.log(union([1], [1, 2], [1, 2, 3, 4]));
