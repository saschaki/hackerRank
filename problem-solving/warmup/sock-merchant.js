//https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(ar) {
let l = ar.length;
let pairs = 0;
for(let i=1;i<=100;i++){
if(ar.indexOf(i)>-1){
    let count = 0;
    for(let j=0;j<l;j++){
if(ar[j]===i){
    count++
}
   }
   pairs += Math.floor(count/2);
}
}
return pairs;
}
