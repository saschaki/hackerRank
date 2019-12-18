//https://www.hackerrank.com/challenges/drawing-book/problem?h_r=next-challenge&h_v=zen

function pageCount(n, p) {
    let result = [];
    function count(number){     
        let fromStartToNumber;
        if(number%2 === 0){
            fromStartToNumber = (number/2);
        }else{
            fromStartToNumber = (number-1)/2;
        } 
        result.push(fromStartToNumber);
    }
    count(n);
    count(p);
    return Math.min(result[0]-result[1],result[1]);    
}

