// array of string
const hobbies = ["makan", "tidur", "belajar"];
// array of object
const studentList = [
  {
    id: 3,
    name: "yudha",
    score: [10, 20, 30],
  },
  {
    id: 10,
    name: "nuki",
    score: [10, 20, 30],
  },
  {
    id: 2,
    name: "nando",
    score: [10, 20, 30],
  },
];

// push ke array of string
hobbies.push("main game");
console.log(hobbies);

// push ke array of object
studentList.push({
  name: "lukman",
});

console.log(studentList);

// pop hapus nilai paling dari array of string
hobbies.pop();
console.log(hobbies);

// pop hapus nilai paling dari array of object
studentList.pop();
console.log(studentList);

hobbies.unshift("ngoding");
console.log("hobbies after unshift", hobbies);

hobbies.shift();
console.log("hobbies after shift", hobbies);

const joinHobbies = hobbies.join(","); // makan,tidur,belajar
console.log("hobbies after join", joinHobbies);

const splitHobbies = joinHobbies.split(",");
console.log("joinHobbies after split", splitHobbies);

const numbers = [5, 2, 3, 6, 1, 7];

console.log("number after sort", numbers.sort());
console.log(
  "number after sort versi 2",
  numbers.sort((a, b) => a - b)
);

console.log(
  "number after sort desc",
  numbers.sort((a, b) => b - a)
);

console.log(
  "student list asc by id",
  studentList.sort((a, b) => a.id - b.id)
);

console.log(
  "student list desc by id",
  studentList.sort((a, b) => b.id - a.id)
);

hobbies.splice(0, 1);
console.log("hobbies after splice", hobbies);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // Orange, Lemon

console.log("fruits after slice", citrus);

const mapStudent = studentList.map((value) => {
  // return {
  //     id: value.id,
  //     name: value.name
  //     jomblo: true,
  //   };

  return {
    ...value, // spread operator
    jomblo: true,
    sumScore: value.score.reduce((prev, current) => prev + current, 0),
    avgScore:
      value.score.reduce((prev, current) => prev + current, 0) /
      value.score.length,
  };
});
console.log("before map student list", studentList);
console.log("after map student list", mapStudent);
