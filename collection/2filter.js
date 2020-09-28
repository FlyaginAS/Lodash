/* eslint-disable no-else-return */
/**
 *
 *
 *
 *
 */
const filter = (arr, arg) => {
  if (typeof arg === 'function') {
    return arr.filter(arg);
  } else if (Array.isArray(arg)) {
    return arr.filter((obj) => {
      const pairs = Object.entries(obj);
      let bool = false;
      pairs.forEach((pair) => {
        if (pair[0] === arg[0] && pair[1] === arg[1]) {
          bool = true;
        }
      });
      return bool;
    });
  } else if (typeof arg === 'object') {
    let arrArg = Object.entries(arg);
    let length = arrArg.length;

    return arr.filter((obj) => {
      let counter = 0;
      for (const prop in arg) {
        if (arg[prop] === obj[prop]) {
          counter += 1;
        }
      }
      return length === counter;
    });
  } else if (typeof arg === 'string') {
    return arr.filter((obj) => {
      if (obj[arg] !== undefined) {
        return true;
      }
    });
  }
};

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

console.log(
  filter(users, function (o) {
    return !o.active;
  })
);
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
console.log(filter(users, { age: 36, active: true }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(filter(users, ['active', false]));
// => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(filter(users, 'active'));
// => objects for ['barney']
