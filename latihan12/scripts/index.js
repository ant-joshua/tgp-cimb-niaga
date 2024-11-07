// Mapping With For Loop
function mapWithForLoop() {
  const harga = [19.99, 4.95, 25, 3.5];
  const hargaSekarang = [];
  for (let i = 0; i < harga.length; i++) {
    hargaSekarang.push(harga[i] * 1.15);
  }

  return hargaSekarang;
}
// Mapping With ES6
function mapWithES6() {
  const harga = [19.99, 4.95, 25, 3.5];
  return harga.map((harga) => harga * 1.15);
}

// Filter with for loop
function filterOdd() {
  const numbers = [1, 60, 112, 123, 100, 99, 73];
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }

  return oddNumbers;
}

function filterOddES6() {
  const numbers = [1, 60, 112, 123, 100, 99, 73];
  return numbers.filter((number) => number % 2 !== 0);
}

const studentList = [
  {
    id: 1,
    name: "John Doe",
    score: 90,
    is_graduated: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    score: 95,
    is_graduated: true,
  },
  {
    id: 3,
    name: "Michael Doe",
    score: 98,
    is_graduated: false,
  },
];

// Find ES6
function findStudent(id) {
  return studentList.find((student) => student.id === id);
}

/**
 * findStudent(1)
 * {
      id: 1,
      name: "John Doe",
      score: 90,
    },
 */

function findStudentIndex(id) {
  return studentList.findIndex((student) => student.id === id);
}
/**
 * findStudentIndex(3)
 * Output: 2
 */

console.log(findStudentIndex(3));
// every ES6 : boolean
function isAllPass() {
  return studentList.every((student) => student.score >= 90);
}
console.log(isAllPass());

// some ES6 : boolean
// Return true if any student is graduated
function isAnyGraduated() {
  return studentList.some((student) => student.is_graduated == true);
}
console.log(isAnyGraduated());

function sumWithFoorLoop() {
  const sumbangan = [1000, 2000, 3000];
  let total = 0;
  for (let i = 0; i < sumbangan.length; i++) {
    total += sumbangan[i];
  }
  return total;
}

function sumWithReduce() {
  const sumbangan = [1000, 2000, 3000];
  return sumbangan.reduce((total, sumbangan) => total + sumbangan, 0);
}

function sumScoreWithReduce() {
  return studentList.reduce((total, student) => total + student.score, 0);
}
function sumScoreWithReduceObject() {
  return studentList.reduce((prev, student) => {
    let total = prev.score || prev;
    return total + student.score;
  });
}

console.log(sumScoreWithReduceObject());

// 500000
// 500_000
