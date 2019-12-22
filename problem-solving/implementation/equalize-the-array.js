//  https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let max = 0;
    let mode = null;
    let counted = arr.reduce((acc, curr) => { 
        if (curr in acc) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        if (max < acc[curr]) {
            max = acc[curr];
            mode = curr;
        }
        return acc;
    }, {});
    return arr.length -max;
}
