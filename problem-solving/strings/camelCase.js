//https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
let strLength = s.length;
let counter = 1;
for(let i =0; i<strLength;i++){
    if(s[i] == s[i].toUpperCase()){
        counter++;
    }  
}
return counter;
}

