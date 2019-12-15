//https://www.hackerrank.com/challenges/apple-and-orange/problem

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    let aLen = apples.length;
    let oLen = oranges.length;

for(let i=0; i <aLen ;i++){
    if(a + apples[i]>=s && a+apples[i]<=t){
        appleCount++;
    }
}

for(let j=0; j<oLen; j++){
    if(b + oranges[j] >= s && b + oranges[j]<=t){
        orangeCount++;
    }
}
console.log(appleCount);
console.log(orangeCount);
}


