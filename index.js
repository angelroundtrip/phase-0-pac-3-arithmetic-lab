function add(a, b) {
    return a + b;
  }
  add(1, 80);

  function subtract(a, b) { //=> 20
    return a - b;
}
    subtract(60, 40);

function multiply(a, b) { //=> 6.8
    return a * b;
}
multiply(2, 3.4);

function divide(a, b) { //=> 2
    return a / b;
}
divide(5.0, 2.5);

function increment(n) {
    return n+= 1;
  }
  increment()

  function decrement(n) {
    return n-= 1;
  }
  decrement()

  function makeInt(string) {
    return parseInt(string, 10);
  }
makeInt("0x2328");

function preserveDecimal(string) {
    return parseFloat(string);
  }
preserveDecimal(2.222);
