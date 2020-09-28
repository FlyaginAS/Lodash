const groupBy = (arr, arg) => {
  if (typeof arg === 'function') {
    let obj = {};
    arr.forEach((item) => {
      obj[`${arg(item)}`] = [];
    });
    console.log(obj);
    arr.forEach((item) => {
      obj[`${arg(item)}`].push(item);
    });
    return obj;
  } else {
  }
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }
