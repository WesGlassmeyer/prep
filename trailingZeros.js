function zeros(n) {
  var product = 1;
  var zerosTotal = 0;
  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  console.log(BigInt(product));
  var string = product.toString();
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "0") {
      zerosTotal++;
    }
  }
  return zerosTotal;
}

console.log(zeros(23));
