//https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Complete the birthdayCakeCandles function below.

function birthdayCakeCandles(ar) {
let max = Math.max(...ar);
let candles = ar.filter(c=>c==max);
return candles.length;
}


