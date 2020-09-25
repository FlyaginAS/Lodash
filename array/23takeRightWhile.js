/**
 *возвращает с конца пока функция тру
 *
 *
 *
 *
 */
const takeRightWhile = (arr, arg) => {
  let reverse = arr.reverse();
  let result = [];
  //if arg is function
  if (typeof arg === 'function') {
    for (let i = 0; i < reverse.length; i += 1) {
      if (arg(reverse[i])) {
        result.push(reverse[i]);
      } else {
        break;
      }
    }
  } else if (Array.isArray(arg)) {
    for (let i = 0; i < reverse.length; i += 1) {
      const pairs = Object.entries(reverse[i]);
      //[ [ 'user', 'pebbles' ], [ 'active', false ] ]
      const index = pairs.findIndex((pair) => {
        return pair[0] === arg[0] && pair[1] === arg[1];
      });
      if (index > 0) {
        result.push(reverse[i]);
      }
    }
  } else if (typeof arg === 'object') {
    for (let i = 0; i < reverse.length; i += 1) {
      let bool = true;
      if (Object.keys(arg).length === Object.keys(reverse[i]).length) {
        Object.keys(reverse[i]).forEach((key) => {
          bool = bool && reverse[i][key] === arg[key];
        });
      }
      if (bool) {
        result.push(reverse[i]);
      }
    }
  }

  //if arg is string
  return result;
};

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];
console.log(
  takeRightWhile(users, function (o) {
    return !o.active;
  })
);

// => objects for ['fred', 'pebbles']
console.log(takeRightWhile(users, { user: 'pebbles', active: false }));
// The `_.matches` iteratee shorthand.

// => objects for ['pebbles']

console.log(takeRightWhile(users, ['active', false]));
// The `_.matchesProperty` iteratee shorthand.
// => objects for ['fred', 'pebbles']

// console.log(takeRightWhile(users, 'active'));
// // The `_.property` iteratee shorthand.
// // => []
