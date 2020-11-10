// https://www.hackerrank.com/challenges/js10-objects/problem
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let rectangle = {length:a, width:b, perimeter: 2 * (a + b), area: a * b};
    return rectangle;
}