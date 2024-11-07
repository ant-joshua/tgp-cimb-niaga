function reverseStringWithBuiltInFunction(str) {
  return str.split("").reverse().join("");
}

function reverseStringWithoutBuiltInFunction(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseStringWithoutBuiltInFunction("Hello World"));
function sortText(str) {
  let sort = "";
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sort += arr[i];
  }

  return sort;
}

console.log(sortText("halo"));
