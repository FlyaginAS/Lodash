/**
 *Creates an array of elements split into groups the length of size.
  If array can't be split evenly, the final chunk will be the remaining 
  elements.

  _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
 */

const chunk = (arr, size) => {
  let resultArr = [];
  const createSubArray = (item) => {};
  //определим количество кусков
  const numOfChunks = Math.floor(arr.length / size);
  console.log(numOfChunks);
  //для каждого куска
  for (let i = 0; i < numOfChunks; i++) {
    let subArray = [];
    for (let j = 0; j < size; j++) {
      subArray.push(arr.shift());
    }
    resultArr[i] = subArray;
  }
  return (resultArr = [...resultArr, ...arr]);
};
console.log(chunk(['a', 'b', 'c', 'd'], 3));
