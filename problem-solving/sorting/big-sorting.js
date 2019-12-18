//https://www.hackerrank.com/challenges/big-sorting/problem

function bigSorting(unsorted) {
        unsorted.sort(function(a,b){
            if(a.length == b.length){
                return a > b ? 1 : -1;
            }
            return a.length - b.length; 
        });
        return unsorted;
    }
