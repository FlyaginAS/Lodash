/**
 *Creates an array with all falsey values removed. 
 The values false, null, 0, "", undefined, and NaN are falsey.

 _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
 */

const compact = (arr) => {
  let resultArr = [];
  arr.forEach((element) => {
    if (element) {
      resultArr.push(element);
    }
  });
  return resultArr;
};

console.log(compact([0, 1, false, 2, '', 3]));
