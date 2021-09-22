function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;
  let maxScore = scores[0];
  let minScore = scores[0];
  let answerArr = [];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxCount++;
      maxScore = scores[i];
    } else if (scores[i] < minScore) {
      minCount++;
      minScore = scores[i];
    }
  }
  return (answerArr = [maxCount, minCount]);
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

// https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
