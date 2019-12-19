// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n=0,password='') {
    let minTillStrong = 0;
    let numbers = /[0-9]/;
    let lower_case = /[a-z]/;
    let upper_case = /[A-Z]/;
    let special_characters = /[!@#$%^&*()+\-]/;
    if(!numbers.test(password)){
        minTillStrong++;
    }
    if(!lower_case.test(password)){
        minTillStrong++;
    }
    if(!upper_case.test(password)){
        minTillStrong++;
    }
    if(!special_characters.test(password)){
        minTillStrong++;
    }

    return Math.max(minTillStrong,6-n);
}

