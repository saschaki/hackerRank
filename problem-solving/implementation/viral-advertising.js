//  https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let cumulative = 0;
    let shared;
    let liked;
    shared = 5;
    liked = Math.floor(shared/2);
    cumulative +=liked;
for(let i=2;i<=n;i++){
    shared = liked*3;
    liked =  Math.floor(shared/2);
    cumulative+=liked;
}
return cumulative
}