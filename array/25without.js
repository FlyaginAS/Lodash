/**
 *Creates an array excluding all given values
 *
 *
 *
 */
const without = (arr, ...args) => {
  let result = [];
  arr.forEach((item) => {
    if (args.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
};

console.log(without([2, 1, 2, 3], 1, 2));
// => [3]
