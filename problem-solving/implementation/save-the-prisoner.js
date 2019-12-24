//  https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s){
    let pos = s+m-1;
    if(pos > n) {
        if(pos % n===0) {
         return n;
        }
        return pos % n;
    }
   return pos;
}


console.log(saveThePrisoner(3,7,3));
