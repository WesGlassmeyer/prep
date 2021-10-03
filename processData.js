function processData(input) {
  let input1 = input.split("\n");
  let output = [];
  let arr = [];
  input1.forEach((item) => {
    if (item[0] === "S" && item[2] === "M") {
      arr = item.substring(4).split(/(?=[A-Z])/);
      arr[1] = arr[1].toLowerCase().substring(0, arr[1].length - 2);
      output.push(arr[0] + " " + arr[1]);
    }
    if (item[0] === "S" && item[2] === "V") {
      arr = item.substring(4).split(/(?=[A-Z])/);
      arr[1] = arr[1].toLowerCase();
      output.push(arr[0] + " " + arr[1]);
    }
    if (item[0] === "C" && item[2] === "M") {
      arr = item.substring(4).split(" ");
      arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
      output.push(arr[0] + arr[1] + "()");
    }
    if (item[0] === "C" && item[2] === "C") {
      arr = item.substring(4).split(" ");
      arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
      arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
      output.push(arr[0] + arr[1]);
    }
    if (item[0] === "S" && item[2] === "C") {
      arr = item.substring(4).split(/(?=[A-Z])/);
      arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
      arr[1] = arr[1].charAt(0).toLowerCase() + arr[1].slice(1);
      output.push(arr[0] + " " + arr[1]);
    }
  });
  output.forEach((item) => {
    console.log(item);
  });
}

console.log(
  processData("S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter")
);

// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
