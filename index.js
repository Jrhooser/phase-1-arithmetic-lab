
// Write your code here
const num1 = 62;
const num2 = 1;
const multiply = num1 * num2;
const random = Math.floor(Math.random() * 10)+ 1;
const num3 = 20;
const num4 = 5;
const mod = num3 / num4;
let max = 0;
const array = [num2, num3, num4];
for(let i=0; i<array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
}