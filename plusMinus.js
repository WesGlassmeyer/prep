function plusMinus(arr) {
  let n = arr.length;
  let plus = 0;
  let minus = 0;
  let zero = 0;
  arr.forEach((value) => {
    if (value < 0) {
      minus++;
    } else if (value > 0) {
      plus++;
    } else {
      zero++;
    }
  });
  console.log((plus / n).toFixed(6));
  console.log((minus / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

// https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
