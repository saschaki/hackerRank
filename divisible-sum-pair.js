//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
let pairs = 0;
for(let i=0;i<n;i++){
   for(let j=i+1;j<n;j++){
       if((ar[i]+ar[j])%k == 0){
           pairs++;
       }
   }
}
console.log(pairs);
return pairs;
}