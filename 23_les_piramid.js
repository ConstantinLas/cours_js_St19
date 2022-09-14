//'use strict';
/*
let lines = 10;
let result ="";

for (let i = 0; i < lines; i++) {

     for (let j = 0; j <= lines - i; j++) {
        result += " ";
     }
     for (let j = 0; j < 2*i + 1; j++) {
        result += "*";
     }
     
     result += "\n";

}
console.log(result);

*/
/*
     *      1
    ***     2
   *****    3
  *******   4
 *********  5

*/

'use strict';
let lines = 3;
let mid = Math.floor(lines / 2);
let result = "";

for (let i = 0; i <= Math.floor(lines / 2); i++) {

    for (let j = 0; j <= mid - i; j++) {
        result += " ";
     }
     for (let j = 0; j < 2*i + 1; j++) {
        result += "*";
     }
     
     result += "\n";
    
}
for (let i = 0; i <= mid ; i++) {

    for (let j = 0; j <= i + 1; j++) {
        result += " ";
     }
     for (let j = 0; j < lines - (2*i)-2; j++) {
        result += "*";
     }
     
     result += "\n";
    
}

console.log(result);

/*
     *
    ***
   *****
  *******
   *****
    ***
     *
*/



/*
  *     *     *
 ***   ***   ***
***** ***** *****

*/