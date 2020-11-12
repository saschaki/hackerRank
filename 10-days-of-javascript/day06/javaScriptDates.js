// https://www.hackerrank.com/challenges/js10-date/problem
function getDayName(dateString) {
    let dayName;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = dateString.split('/')
    dayName = days[new Date(date[2],date[0]-1,date[1]).getDay()];
    return dayName;
}