//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
//let q = arguments[0].length%3;
if ((Math.abs(z-x)==Math.abs(z-y))){
    console.log("C");
}else{
    Math.abs(z-x)<Math.abs(z-y) ? console.log("A") : console.log("B")
}

}
catAndMouse(2,3,3);