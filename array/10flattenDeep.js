/*
*Recursively flattens array.
*
*
* _.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
* */

const flattenDeep=(arr)=>{
  let flatArr=[];
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
  if(!elseArr){
    return flatArr;
  } else{
    //если нет- возвращаем массив.
    return flattenDeep(flatArr);
  }

};

console.log(flattenDeep([1, [2, [3, [4]], 5]]));
