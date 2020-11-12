// https://www.hackerrank.com/challenges/js10-regexp-1/problem
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = RegExp(/^([aeiou]).*\1$/); 
    return re;
}