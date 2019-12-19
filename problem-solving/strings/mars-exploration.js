// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
    let signalLength = s.length;
    let errorCount=0;
for(let i=0;i<signalLength;i++){
if(i%3===0 || i%3===2){
    if(s[i]!== 'S'){
        errorCount++;
    }
}else if (i%3===1){
    if(s[i]!=='O'){
        errorCount++;
    }
}
}
return errorCount;
}


