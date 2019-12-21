// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
let height = 0;
for (let i=0;i<=n;i++){
    i % 2 == 0 ? height++ : height*=2;
}
return height;
}