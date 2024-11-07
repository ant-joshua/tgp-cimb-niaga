// ga di compile di js
interface User {
  name: string;
  age: number;
  hobbies: string[];
}

enum SchoolType {
  negeri = "negeri",
  swasta = "swasta",
}

function isValidSchoolType(type: string) {
  return Object.values(SchoolType).includes(type as SchoolType);
}

function validateSchoolType(type: string): SchoolType {
  if (!isValidSchoolType(type)) {
    throw new Error(
      `Invalid school type: ${type}. Allowed school type are: ${Object.values(
        SchoolType
      ).join(", ")}`
    );
  }
  return type as SchoolType;
}

type School = {
  name: string;
  type: SchoolType;
  address: string;
};

class Car {
  brand: string;
  name?: string | null;

  constructor(brand: string, name?: string) {
    this.brand = brand;
    this.name = name;
  }
}

const car: Car = new Car("Wuling");
car.brand = "Toyota";
// car.name = "Kijang";

const user: User = {
  name: "Nando",
  age: 60,
  hobbies: ["godain resepsionis"],
};

function main(args?: any[]) {
  console.log("asdasd");

  let nilai: number;

  console.log(car);

  const school: School = {
    name: "UPJ",
    type: SchoolType.negeri,
    address: "Bintaro",
  };

  console.log(school);

  console.log(validateSchoolType("negeri"));

  // Union Type
  let item: number | string = "105";
  item = 105;

  let person: Object = { name: "John", age: 30 };

  let person2: Record<string, any> = {
    name: "John",
    age: 30,
  };

  let person3: { name: string; age: number } = {
    name: "john",
    age: 30,
  };

  let tuple: [string, number] = ["john", 30];

  //   nilai = "testing";

  let direction: "left" | "right" = "right";

  let scores: number[] = [10, 59, 70, 90];

  scores.push(100);

  for (let score of scores) {
    console.log(score);
  }

  // array with union type of string & number
  let mixedArray: (string | number)[] = [10, "nama", 30];
}

type A = { name: string };
type B = { age: number };

// Intersection type
type AandB = A & B;

type Status = "success" | "error" | "loading";

const abc: AandB = {
  name: "ini dari type a",
  age: 10,
};

function hello(name: string = ""): string | null {
  if (name == "") {
    return null;
  }
  return "hello :" + name;
}

main();
