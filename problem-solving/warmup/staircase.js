//https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
let line;
for(let i=0; i<n; i++){  
    line="";
    let spaces = n-i-1;
    for(let j=0;j<spaces;j++){
        line+= "o";     
    }
    for(let k =0;k<n-spaces;k++){
        line+="#"; 
    }
    console.log(line)
}
}
