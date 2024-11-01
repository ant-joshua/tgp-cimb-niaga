// input : [2, 86, 41, 5, 9, 32, 1, 8, 91, 53]
// search : 100
// [91,9]

// O(n^2)
function findNumbers(numbers, search) {
  const result = [];
  // [2, 86, 41, 5, 9, 32, 1, 8, 91, 53]
  for (let number of numbers) {
    let temp = number;

    for (let secondNumber of numbers) {
      if (temp + secondNumber == search) {
        result.push([temp, secondNumber]);
      }
    }
  }

  return result;
}

// // O(n)
function findNumberMap(numbers, search) {
  const map = {}; // Initialize an empty map  map[98]
  const result = []; // Initialize the result array

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]; // 91

    const complement = search - number; // 100 - 2 = 98

    // Check if the complement exists in the map
    if (map[complement] !== undefined) {
      // If it does, push both numbers to the result array
      result.push([complement, number]);
      // break; // break out of the loop after finding the first pair
    }

    // Store the current number in the map with its index as the value
    map[number] = i;
  }

  return result;
}

function main() {
  let range = (n) => Array.from(Array(n).keys());

  const startTime = performance.now();

  // console.log(findNumbers([2, 86, 41, 5, 9, 32, 1, 8, 91, 53], 100));
  // console.log(findNumberMap([2, 86, 41, 5, 9, 32, 1, 8, 91, 53], 100));

  // console.log(findNumbers(range(100_000), 500)); // 100_000
  console.log(findNumberMap(range(100_000), 500));

  const endTime = performance.now();

  console.log("Time: ", endTime - startTime);
}

main();

// function getAllStudent() {
//   const studentList = []; // select * from students; // 300ms

//   const studentIs = ["1", "2", "3"];

//   const pembayaranList =
//     "select * from pembayaran where student_id in (" +
//     studentIs.join(",") +
//     ")"; // 1s

//   studentList.forEach((student) => {
//     const pembayaran = pembayaranList.find(
//       (pembayaran) => pembayaran.student_id == student.id
//     );
//   });

//   // 50 * 100 = 5000ms
// }
