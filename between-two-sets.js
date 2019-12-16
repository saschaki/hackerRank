//https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    let result = 0;
    let index = 1;
    let aWithoutFirstElement = a.splice(1, a.length);
    while(a[0] * index <= b[0]) {
        if(aWithoutFirstElement.every(item => (a[0] * index) % item === 0)
          && b.every(item => item % (a[0] * index) === 0))
           { result++;}
        index++;
    }
    console.log(result);
    return result;
}

