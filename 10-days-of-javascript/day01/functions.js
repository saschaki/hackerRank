// https://www.hackerrank.com/challenges/js10-function/problem
/*
 * Create the function factorial here
 */
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1); 
}