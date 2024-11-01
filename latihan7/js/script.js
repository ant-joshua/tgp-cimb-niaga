/**
 * JSDoc
 * sum : sum a + b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

// = []
function sumVariadic(...b) {
  let total = 0;

  b.forEach((value) => {
    total += value;
    console.log("total sekarang", total);
  });

  return total;
}

function sumVariadicReduce(...b) {
  return b.reduce((prev, current) => prev + current, 0); // null jika tidak menggunakan initial
}

const sumWithArrow = (...b) => {
  return b.reduce((prev, current) => prev + current, 0); // null jika tidak menggunakan initial
};

const sumWithArrowInline = (...b) =>
  b.reduce((prev, current) => prev + current, 0);

console.log(sumVariadic(10, 20, 30, 40, 50, 60));

console.log(sumVariadicReduce(10, 20, 30, 40, 50, 60));

console.log(sumWithArrow(10, 20, 30, 40, 50, 60));

function toggleImage() {
  const coffeImage = document.getElementById("coffeImage");

  if (coffeImage.classList.contains("hidden")) {
    coffeImage.classList.remove("hidden");
  } else {
    coffeImage.classList.add("hidden");
  }
}

// Event ini akan dijalankan ketika html sudah ke load
// document.onload(() => {});

const submitForm = document.querySelector("#submitForm");
const inputName = document.querySelector("#inputName");
const selectEdu = document.querySelector("#selectEdu");
const inputGender = document.querySelectorAll("[name='gender']");

inputGender.forEach((value) => {
  value.addEventListener("change", function (event) {
    const value = event.target.value;

    const displayGender = document.querySelector("#displayGender");
    displayGender.textContent = value;
  });
});

inputName.addEventListener("input", function (event) {
  const value = event.target.value;

  const displayName = document.querySelector("#displayName");
  displayName.textContent = value;
});

selectEdu.addEventListener("change", function (event) {
  const value = event.target.value;

  const displayEdu = document.querySelector("#displayEdu");
  displayEdu.textContent = value;
});

// inputGender.addEventListener("change", function (event) {
//   const value = event.target.value;

//   const displayGender = document.querySelector("#displayGender");
//   displayGender.textContent = value;
// });

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;

  const data = new FormData(form);
  for (const [name, value] of data) {
    if (name == "gender") {
    }
    console.log(name, ":", value);
  }

  const checkedGender = document.querySelector("[name='gender']:checked").value;

  // get the field that you want
  // const userInputField = form.elements["name"];
  // alert(userInputField.value);

  console.log(event);
});
