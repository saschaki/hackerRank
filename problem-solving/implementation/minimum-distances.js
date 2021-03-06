//  https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    let minValue = Math.pow(10,1000);
    let map = {};
    let diff;
    for(let i=0; i<a.length; i++) {
       if(map[a[i]]) {
           diff = (i - (map[a[i]]-1));
           if (diff < minValue) {
               minValue = diff;
           }
           map[a[i]] = i+1;
           }else{
               map[a[i]] = i+1;
           }
       }
        return minValue == 'Infinity' ? -1 : minValue;
    }
