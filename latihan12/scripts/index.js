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

// Find ES6
function findStudent(id) {
  const studentList = [
    {
      id: 1,
      name: "John Doe",
      score: 90,
    },
    {
      id: 2,
      name: "Jane Doe",
      score: 95,
    },
    {
      id: 3,
      name: "Michael Doe",
      score: 98,
    },
  ];

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
