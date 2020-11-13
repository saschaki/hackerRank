// https://www.hackerrank.com/challenges/extra-long-factorials/problem
// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    function factorials(n) {
        n = BigInt(n);
        return n === 0n ? 1n :  n * factorials(n - 1n);  
    }
    console.log(String(factorials(n)));
}
