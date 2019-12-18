//https://www.hackerrank.com/challenges/plus-minus/problem
// Complete the plusMinus function below.
function plusMinus(arr) {
let positive = arr.filter(n=>n>0);
let negative = arr.filter(n=>n<0);
let zero = arr.filter(n=>n==0);
let length = arr.length;

console.log(positive.length/length);
console.log(negative.length/length);
console.log(zero.length/length);
}
