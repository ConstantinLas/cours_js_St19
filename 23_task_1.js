"use strict";

for (let i = 20; i > 10; i--) {
    if (i ===13 ) {
         break ;
    }
    console.log(i);
}
let i =5;
(i === 5) ? console.log("OK") : console.log("not OK");

for (let index = 0; index < 11; index++) {
    ((index%2)=== 0) ? console.log(index) : console.log("****");
}


console.log("*******");
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let w = 2;
while (w <= 16) {
    if (w % 2 != 0) {
        console.log(w);
    }
    w++;
}


function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask();


let arr = [];

for (let i = 5; i<=10; i++){
    arr[i-5] = i;
}
console.log(arr);
console.log(arr[2]);