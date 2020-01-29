//https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
//n number of steps, s = path string
let valleyCount = 0;
let valley = false;
let pathArray = [...s];
let level = 0;
for (let i =0;i< n;i++){
   pathArray[i] === 'D' ? level-- : level++;
   if(level <0 && valley === false){
       valley = true;
   }
   if(level ===0 && valley == true){
       valleyCount++;
       valley = false;
   }
}
console.log(valleyCount);
return valleyCount;
}


