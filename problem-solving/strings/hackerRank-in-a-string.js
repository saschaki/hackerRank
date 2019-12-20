//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s='') {
    let hr = [...'hackerrank'];
    let index = 0;
    for(let i = 0; i <= s.length; i++) {
    if(s.charAt(i) === hr[index]) {
        if(index === 9) {
            return 'YES';
        }
        index++;
    }
}
return 'NO';
}

