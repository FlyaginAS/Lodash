/**
 *Creates a new array
  concatenating array with any additional arrays and/or values.

  var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
 */

const concat = (...args) => {
  let newArr = [];
  args.forEach((item) => {
    if (Array.isArray(item)) {
      newArr = [...newArr, ...item];
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};
let array = [1];

console.log(concat(array, 2, [3], [[4]]));
