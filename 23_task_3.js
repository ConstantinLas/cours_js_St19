'use strict';

let arr = [];
arr[0] = "     *";
console.log(arr[0].length);

for (let i = 1; i< 6; i++) {
    arr[i] = arr[i-1].substring(1) + "**";
}

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
