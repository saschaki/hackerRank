//https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    let index = s.length - m;
    let count = 0;
for(let i=0; i<=index;i++){
   if( s.slice(i,i+m).reduce((a,b)=> a+b ) == d){
       count++;
   }
}
return count;
}
    