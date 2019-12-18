//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
    let isLeapYear;
    if (year==1918){
    return '26.09.1918';
    }else if (year >= 1700 && year <= 1917){
            if(year % 4 == 0){
                isLeapYear = true;
            }
        }
     else if(year > 1918 && (year%400 ==0 || (year %4 == 0 && year % 100 !=0))){
         isLeapYear = true; 
     }
     if (isLeapYear){
        return '12.09.' + year;
     }
     if (!isLeapYear){
        return '13.09.' + year;
     }
    }