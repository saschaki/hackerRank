//https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen

function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2 || (x2 - x1) % (v1 - v2) !== 0) {
        return 'NO';
    } else {
        return 'YES';
    }
   } 