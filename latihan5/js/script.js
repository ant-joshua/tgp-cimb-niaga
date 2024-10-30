console.log("hello from external script");

function dataType() {
  // String
  let message = "Hello my name joshua";
  // int :number
  let age = 25;
  // float :number
  let nilai = 10.5;
  // Boolean
  let isLogin = true;
  // Object / HashMap
  let user = {
    name: "Joshua",
    age: 25,
    isLogin: true,
    school: null,
  };

  let user2 = {
    name: "Joshua",
    age: 25,
    isLogin: false,
    school: {
      name: "SMK N 1",
      address: "Jl. Jendral Sudirman",
    },
  };
  // Null
  let empty = null;
  // Undefined
  // Array of string
  // List<String> hobbies = new ArrayList<String>(); (Java)
  // hobbies : Array<string> = [];  (TypeScript)
  let hobbies = ["coding", "reading", "swimming", 10, true];
  // Array of object
  let studentList = [
    {
      name: "Joshua",
      age: 25,
      isLogin: true,
    },
    {
      name: "Joshua",
      age: 25,
      isLogin: true,
    },
    {
      name: "Joshua",
      age: 25,
      isLogin: true,
    },
  ];

  console.log(user["score"]); // undefined
}

let result = document.getElementById("result");
console.log(result);
result.innerHTML = "<h1>Hello from script</h1>";

let resultWithSelector = document.querySelector("#result2");
console.log(resultWithSelector);
// resultWithSelector.innerText = "<h1>Hello from script</h1>";

// <p>ini paragraph</p>
const paragraphElement = document.createElement("p");
paragraphElement.innerText = "ini paragraph";

// resultWithSelector.innerHTML = paragraphElement.innerHTML;
resultWithSelector.appendChild(paragraphElement);
