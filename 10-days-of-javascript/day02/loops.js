// https://www.hackerrank.com/challenges/js10-loops/problem
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i' , 'o', 'u'];
    let notVowel = [];
    let output = [...s].reduce(function(filtered, letter) {
       vowels.includes(letter) ? filtered.push(letter) :
       notVowel.push(letter);
     return filtered;
    }, []).concat(notVowel);
    
    for (let i in output) {
        console.log(output[i]);
    }
}