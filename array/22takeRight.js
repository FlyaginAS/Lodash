/**
 * Creates a slice of array with n elements taken from the end.
 *
 *
 * _.takeRight([1, 2, 3]);
// => [3]

_.takeRight([1, 2, 3], 2);
// => [2, 3]

_.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

_.takeRight([1, 2, 3], 0);
// => []
 *
 *
 *
 *
 */

const takeRight = (arr, num) => {
  if (num === undefined) {
    const copy = arr.slice(-1);
    console.log(copy);
  } else if (num === 0) {
    console.log([]);
  } else {
    const copy = arr.slice(-num);
    console.log(copy);
  }
};

takeRight([1, 2, 3]);
// => [3]

takeRight([1, 2, 3], 2);
// => [2, 3]

takeRight([1, 2, 3], 5);
// => [1, 2, 3]

takeRight([1, 2, 3], 0);
// => []
