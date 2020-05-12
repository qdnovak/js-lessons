class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl() {
    return this.ip;
  }
}
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getage() {
    return this.age;
  }
  setName(name) {
    this.name = name;
  }
}
var People1 = new People("Vasya", 33);
People1.setName("Valera");

console.log(People1);
function addone(n) {
  return function(num) {
    return n + num;
  };
}
const add = addone(10);
console.log(add(2));

const aws = new Server("Aws German", "82.21.21.32");
console.log(aws.getUrl());
