'use strict';

let arr = [];
let result= [];
for (let i = 5; i<=10; i++){
    arr[i-5] = i;
}
result = arr;
console.log(result);
console.log("**********");



for(let i = 0; i < result.length; i++){
    
    result[i] = result[i] * 2;
}
console.log(result);

let y = "bla bla bla";
console.log(typeof(y));

let arrNew = [45,23,"text",56,"text2"];
for(let i = 0; i < arrNew.length; i++){
    if (typeof(arrNew[i]) == 'string') {
        arrNew[i] = arrNew[i] + " - done";
    }
}
console.log(arrNew);