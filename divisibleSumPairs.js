function divisibleSumPairs(n, k, ar) {
  let answer = 0;
  var x = 0;
  for (let i = 0; i < n; i++) {
    var x = x + 1;
    for (let j = x; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        answer++;
      }
    }
  }
  console.log(answer);
  return answer;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

// https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
