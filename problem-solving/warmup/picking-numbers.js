//https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
   let maxLength =1;
   let aLength = a.length;
   for(let i=0;i<aLength;i++){
    let max = a[i]+1;
    let min = a[i]-1;
    let iteration = 0;
    let meetsCriterion = true;
    while(meetsCriterion && ){
        if(a[i]+1+iteration >=min && a[i]+1<=max){
            maxLength++;
            iteration++;
        }else{
            meetsCriterion = false;
        }
       
    }
    
   }
console.log(maxLength);
}

let ar = [1,1,2,2,4,4,5,5,5];
pickingNumbers(ar);