// https://www.hackerrank.com/challenges/js10-arrays/problem
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function  
   let sortedUniqueArray = [...(new Set(nums))].sort((a,b) => a - b);
   return sortedUniqueArray[sortedUniqueArray.length-2];
}