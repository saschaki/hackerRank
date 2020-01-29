//https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let outcome = [0,0];
    for(var i =0; i<=2;i++){
        a[i]!=b[i] && (a[i] >b[i] ? outcome[0]++ : outcome[1]++);    
    }
    return outcome;
    }