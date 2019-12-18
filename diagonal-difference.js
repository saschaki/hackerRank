//https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    let diagonalOne = 0;
    let diagonalTwo = 0;
    let mSize = arr.length;
    for(let i=0;i<mSize;i++){
      diagonalOne += arr[i][i];
      diagonalTwo += arr[i][mSize-i-1];
    }
     return Math.abs(diagonalOne - diagonalTwo);  
 }
