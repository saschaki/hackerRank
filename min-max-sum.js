//https://www.hackerrank.com/challenges/mini-max-sum/problem
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
        const sorted =[...arr].sort();
        const maxSum = sorted.slice(1,arr.length).reduce((a,b) => a+b);
        const minSum = sorted.slice(0,arr.length - 1).reduce((a,b) => a +b);
        console.log(minSum + " " + maxSum);
        //return minSum + " " + maxSum;
}

