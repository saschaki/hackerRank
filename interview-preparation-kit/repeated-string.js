//  https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s='', n=0) {
let reducer = ([...s].filter(l=>l==='a').length);
let count = Math.floor(n/s.length);
let rest = n % s.length;
let array = new Array(rest);
let a;
for(let i=0;i<array.length;i++){
    a = i%s.length;
    array[i] = s[a];
}
return reducer*count + array.filter(l=>l==='a').length
}
