/**
 *Creates an object composed of keys generated from the results
  of running each element of collection thru iteratee.
   The corresponding value of each key is the number of times
    the key was returned by iteratee
 *
 *
 *
 *
 */
const countBy = (arr, func) => {
  const obj = {};
  const copy = arr.map((item) => {
    return func(item);
  });
  copy.forEach((item) => {
    obj[`${item}`] = 0;
  });
  copy.forEach((item) => {
    obj[`${item}`] += 1;
  });
  return obj;
};

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }
console.log(Boolean);
