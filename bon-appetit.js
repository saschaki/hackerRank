//https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k,b) {
    function bonAppetit(bill, k, b) {
        let totalSum = bill.reduce((a,b)=>a+b);
        let payback = b-((totalSum-bill[k])/2);
        if(payback === 0){
           console.log('Bon Appetit');
        }else {
            console.log(payback);
            }
        }
}
