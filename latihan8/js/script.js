/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 */
let user = {
  name: "Cecez",
  age: 22,
  isMarriage: false,
  studentScore: 80,
  school: {
    name: "Binus",
  },
};

let user2 = {
  ...user, // spread operators
};

/**
 * Comparator + if else statement
 * A  = 90 -100
 * B = 80 - 89
 * C = 70-79
 * D = 60-69
 * E = 50-59
 * F = < 50
 *
 * @param {number} score
 * @returns {string}
 */
function getGrade(score) {
  let grade = "F";
  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score >= 50 && score <= 59) {
    grade = "E";
  } else {
    grade = "F";
  }
  return grade;
}
// Comparator
function checkIfMarriage(isMarriage) {
  return isMarriage ?? "belum menikah";
}

// String interpolation
console.log(`${user.name}, Score : `, getGrade(user.studentScore));

console.log(
  `${user2.school?.name ?? "belum sekolah"}, Score : `,
  getGrade(user.studentScore)
);

console.log("1" == 1); // true
console.log("1" === 1); // false
