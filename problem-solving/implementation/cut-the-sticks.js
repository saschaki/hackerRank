// https://www.hackerrank.com/challenges/cut-the-sticks/problem

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    let outputArray = [];
    function recursive(arr){
        let length = arr.length;
        while (length !==0) {
            outputArray.push(length);
            let min = Math.min(...arr);
            return recursive(arr.map(stick => stick - min).filter(stick => stick !== 0));
        }
    }
    recursive(arr);
    return outputArray;    
}