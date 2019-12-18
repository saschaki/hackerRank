//https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    let maxSum = -1;
    let kbLength = keyboards.length;
    let drLength = drives.length;
    let sum;
    for(let i=0;i<kbLength;i++){
        for(let j=0;j<drLength;j++){
          sum = keyboards[i] + drives[j];
            if(sum>maxSum && sum<=b){
                maxSum = sum;
            }
        }
  }
  return maxSum;
  }
  