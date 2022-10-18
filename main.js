function featureA2() {
  console.log('feature a2');
}

function featureA1(x, y, z) {
  console.log(x, y, z);
}

function doSomething(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

function main() {
  console.log("Hello World");
  doSomething("a", "b", "c", "d");
  featureA1('x', 'y', 'z');
  featureA2();
}
