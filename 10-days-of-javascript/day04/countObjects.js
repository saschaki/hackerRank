// https://www.hackerrank.com/challenges/js10-count-objects/problem
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(object => object.x === object.y).length;
}