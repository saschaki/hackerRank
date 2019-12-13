//https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = grades.map(
    function round(grade){
        let number = grade % 5;
        if (grade < 38 || number <3){
            return grade
        }else {
            return grade - number +5;
        }       
    })
    console.log(roundedGrades);
    return roundedGrades;
}

gradingStudents([34,65]);
