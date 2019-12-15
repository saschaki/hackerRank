//https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()); 
     let maxValue = Math.max(...[...map.values()]);
     let maxKeys = [...map.entries()]
        .filter(({ 1: v }) => v === maxValue)
        .map(([k]) => k)
        return Math.min(...maxKeys);
}
