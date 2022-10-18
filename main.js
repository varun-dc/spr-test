function featureA2() {
  console.log('feature a2');
}

function featureA1({x, y, z}) {
  console.log(x, y, z);
}

function doSomething({ a, b, c, d }) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

function main() {
  console.log("Hello World");
  doSomething({a: "1", b: "2", c: "3", d: "4"});
  featureA1({ x: '1', y: '2', z: '3' });
  featureA2();
}
