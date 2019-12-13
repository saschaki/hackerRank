//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

// Complete the breakingRecords function below.
function breakingRecords(scores) {

    let aboveRest = 0;
    let belowWorst = 0;
    let min = scores[0];
    let max = scores[0];
    let output = scores.map(function(score){ 
        if (score > max){
            max = score;
            aboveRest++;
        }
        if (score  <min){
           min = score 
           belowWorst++;
        }
    }
    );
      return [aboveRest, belowWorst];
    }
