//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
    let first;
    let array = a;
    for(let i =0;i<d;i++){
        first = array[0];
        for(let i=0;i<array.length-1;i++){     
            array[i]=array[i+1];
        } 
        array[array.length-1]= first;
    }
     return array;
    }

