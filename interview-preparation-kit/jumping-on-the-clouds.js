//  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
function jumpingOnClouds(c) {
    let position = 0;
    let endPos = c.length-1;
    let jumps = 0;
    while(position < endPos){
        jumps++;
    c[position+2] !==1 ? position+=2 : position +=1;
    }
    return jumps;
}

