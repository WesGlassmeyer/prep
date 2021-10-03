function matchingStrings(strings, queries) {
  var answer = [];
  for (let i = 0; i < queries.length; i++) {
    var count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}

matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]);

// https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
