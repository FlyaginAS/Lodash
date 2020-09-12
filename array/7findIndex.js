/*
* Returns the index of the found element, else -1.
*
* var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
* */
let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const findIndex=(arr, arg)=>{
  if(typeof arg === 'function'){
    return  arr.findIndex(arg);
  }else if(Array.isArray(arg)){
    return arr.findIndex((obj)=>{
      return obj[arg[0]] === arg[1];
    });

  }else if(typeof arg === 'object'){
    return arr.findIndex((obj)=>{
      let result=0;
      let iter=0;
      for(prop in arg){
        iter++;
        if(arg[prop]===obj[prop]) {
          result++;
        }
      }
      return result===iter;
    });
  }else if(typeof  arg === 'string'){
    return  arr.findIndex((obj)=>{
      return obj[arg];
    });
  }

};

console.log(findIndex(users,function(o) { return o.user === 'barney'; }));
console.log(findIndex(users,'active'));
console.log(findIndex(users,['active', false]));
console.log(findIndex(users,{ 'user': 'fred', 'active': false }));



