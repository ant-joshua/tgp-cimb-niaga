function main(param1, param2, callback) {
  console.log(param1, param2);
  callback();
}

function callback() {
  console.log("Hello World from callback");
}

main("Hello", "World", callback);

function sumWithCallback(nilai1, nilai2, callbackParam) {
  callbackParam(nilai1, nilai2);
}

function sumWithCallbackReturn(nilai1, nilai2, callbackParam) {
  if (typeof callbackParam == "function") {
    return callbackParam(nilai1, nilai2);
  }
  return "Callback is not a function";
}

console.log(
  "sum with return",
  sumWithCallbackReturn(5, 10, (nilai1, nilai2) => nilai1 + nilai2)
);

function sumCallback(nilai1, nilai2) {
  console.log(nilai1 + nilai2);
}

sumWithCallback(5, 10, sumCallback);

// Callback with anonymous arrow function
sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 * nilai2));

sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 + nilai2));

sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 / nilai2));

sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 - nilai2));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {})
//   .finally(() => {});

function callPromise() {
  let janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Janjian");
    }, 2000);
  });

  return janjian
    .then((data) => {
      console.log("janjian :", data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("callPromise Finally");
    });
}

function callPromiseReject() {
  let janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Janjian");
    }, 5000);

    setTimeout(() => {
      reject("Gajadi Janjian");
    }, 1000);
  });

  return janjian
    .then((data) => {
      console.log("janjian :", data);
    })
    .catch((error) => {
      console.log("Error :", error);
    })
    .finally(() => {
      console.log("callPromiseReject Finally");
    });
}

callPromise();
callPromiseReject();

const studentList = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];
function fetchStudentById(id) {
  return new Promise((resolve, reject) => {
    let student = studentList.find((student) => student.id === id);
    if (student) {
      resolve(student);
    } else {
      reject("Student not found");
    }
  });
}

fetchStudentById(1)
  .then((student) => {})
  .catch((error) => {
    console.log(error);
  });
async function fetchStudentByName(name) {
  let student = studentList.find((student) => student.name === name);
  if (student) {
    return Promise.resolve(student);
  }
  return Promise.reject("Student not found");
}
