/*
*Recursively flatten array up to depth times.
*
*
* var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
* */

const flattenDeep=(arr, deph)=>{
  let flatArr=[];
  deph--;

  arr.forEach((item)=>{
    if(Array.isArray(item)){
      flatArr=[...flatArr,...item];
    } else {
      flatArr.push(item);
    }
  });

  //проверяем элементы массива, если хоть один- массив, повторяем вызов функции
  let elseArr=false;
  for(i=0;i<flatArr.length;i++){
    if(Array.isArray(flatArr[i])){
      elseArr=true;
    }
  }
  if(!elseArr || deph===0 ){
    return flatArr;
  } else {
    //если нет- возвращаем массив.
    return flattenDeep(flatArr,deph);
  }

};

console.log(flattenDeep([1, [2, [3, [4]], 5]],1));
console.log(flattenDeep([1, [2, [3, [4]], 5]],2));