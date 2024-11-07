function selectionSort(numbers) {
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[i]) {
        min = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = min;
      }
    }
  }

  return numbers;
}
console.table(selectionSort([1, 60, 112, 123, 100, 99, 73]));

function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    let current = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > current) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = current;
  }

  return numbers;
}

function mergeSort(numbers) {}

const numbers = [1, 2, 3, 4, 5, 6];

function linearSearch(arr, toFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == toFind) {
      return i;
    }
  }

  return null;
}

// Linear Search
linearSearch(numbers, 3);
// Linear Search
numbers.find((number) => number === 3);
