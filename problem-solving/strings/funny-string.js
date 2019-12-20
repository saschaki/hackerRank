//  https://www.hackerrank.com/challenges/funny-string/problem

function funnyString(s) {
let r = [...s].reverse().join("");
for(let i=0; i<s.length-1;i++) {
    if(
        Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) !==
        Math.abs(r.charCodeAt(i) - r.charCodeAt(i+1))
      )
      {return 'Not Funny';}
}
 return 'Funny';
}
