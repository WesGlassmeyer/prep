function timeConversion(s) {
  if (s.includes("PM") && s.includes("12")) {
    return s.slice(0, 8);
  } else if (s.includes("AM") && s.includes("12")) {
    return parseInt(s) - 12 + "0" + s.slice(2, 8);
  } else if (s.includes("PM")) {
    return parseInt(s) + 12 + s.slice(2, 8);
  } else {
    return s.slice(0, 8);
  }
}

console.log(timeConversion("12:45:54PM"));

// https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
