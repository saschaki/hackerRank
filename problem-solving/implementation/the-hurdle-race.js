//  https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    let potions;
    maxHeight > k ?  potions = maxHeight - k : potions = 0;
    return potions;
}