function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  let minSort = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < minSort.length - 1; i++) {
    min = min + minSort[i];
  }
  for (let i = 1; i < minSort.length; i++) {
    max = max + minSort[i];
  }
  console.log(min, max);
}

// https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one&h_r=next-challenge&h_v=zen
