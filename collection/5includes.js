const includes = (collection, value, fromIndex = 0) => {
  if (Array.isArray(collection)) {
    return collection.includes(value, fromIndex);
  } else if (typeof collection === 'object') {
    for (const key in collection) {
      if (collection[key] === value) {
        return true;
      }
    }
  } else if (typeof collection === 'string') {
    if (collection.includes(value)) {
      return true;
    }
  }
};

console.log(includes([1, 2, 3], 1));
// => true

console.log(includes([1, 2, 3], 1, 2));
// => false

console.log(includes({ a: 1, b: 2 }, 1));
// => true

console.log(includes('abcd', 'bc'));
// => true
