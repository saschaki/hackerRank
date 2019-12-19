// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
    if (s=== null || s=== undefined){
        s= ""
    };
    let string = s.toLowerCase();
    let regex = /[a-z]/;
    const pSet = new Set(Array.from(string).filter(e=>regex.test(e)));
        if(pSet.size<26){
            console.log(pSet.size);
            return 'not pangram';

        }else if (pSet.size==26){
            return 'pangram';
        }
    }
