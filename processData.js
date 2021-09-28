function processData(input) {
  let arr = [];
  if (input[0] === "S" && input[2] === "M") {
    arr = input.substring(4).split(/(?=[A-Z])/);
    arr[1] = arr[1].toLowerCase().substring(0, arr[1].length - 2);
    console.log(arr[0] + " " + arr[1]);
  }
  if (input[0] === "S" && input[2] === "V") {
    arr = input.substring(4).split(/(?=[A-Z])/);
    arr[1] = arr[1].toLowerCase();
    console.log(arr[0] + " " + arr[1]);
  }
  if (input[0] === "C" && input[2] === "M") {
    arr = input.substring(4).split(" ");
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    console.log(arr[0] + arr[1] + "()");
  }
  if (input[0] === "C" && input[2] === "C") {
    arr = input.substring(4).split(" ");
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    console.log(arr[0] + arr[1]);
  }
  if (input[0] === "S" && input[2] === "C") {
    arr = input.substring(4).split(/(?=[A-Z])/);
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
    arr[1] = arr[1].charAt(0).toLowerCase() + arr[1].slice(1);
    console.log(arr[0] + " " + arr[1]);
  }
}

console.log(processData("S;C;OrangeHighlighter"));

// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
