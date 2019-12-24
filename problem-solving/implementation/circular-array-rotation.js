//  https://www.hackerrank.com/challenges/circular-array-rotation/problem


function circularArrayRotation(a, k, queries) {
let offset = a.length - (k % a.length);
return queries.map( e => a[(e + offset)%a.length]);
}
