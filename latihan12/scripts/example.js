// Object
const user = {
  name: "John", // property
  age: 30,
  // method
  getName: function () {
    return this.name;
  },
};

// Class User
class User {
  // instance method : ini digunakan untuk initialisasi object / property di dalam class
  constructor(
    // property
    name,
    // property
    age
  ) {
    this.name = name;
    this.age = age;
  }

  // method
  getName() {
    return this.name;
  }

  toObject() {
    return {
      name: this.name,
      age: this.age,
    };
  }
}
const john = new User("John", 30);

console.log(john.toObject());
