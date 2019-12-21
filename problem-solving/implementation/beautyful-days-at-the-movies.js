// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?h_r=next-challenge&h_v=zen

function beautifulDays(i, j, k) {
let count = 0;
for(let v=i; v<=j; v++) {
    let reverse = parseInt(Array.from(String(v), Number).reverse().join(''));
    let beauty = Math.abs((v-reverse)/k);
    if (beauty == Math.floor(beauty)){
        count++;
    }
}
return count;
}
