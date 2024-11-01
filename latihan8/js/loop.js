function defaultForLoop() {
  let counter = 0;

  for (let i = 0; i < 10; i++) {
    counter = i;

    console.log(counter);
  }

  console.log("last counter", counter);
}

function loopForEach() {
  const studentList = [
    {
      name: "joshua",
    },
    {
      name: "Nuki",
    },
  ];

  studentList.forEach((value, index) => {
    console.log("Nama: ", value, " index: ", index);
  });
}

function loopRepeat() {
  let message = "Saya tidak akan bolos lagi";

  console.log(message.repeat(10));
}

function loopWhile() {
  let counter = 0;

  // while akan jalan terus selama kondisi nya true
  while (counter < 10) {
    counter++; // ini tidak boleh lupa
    console.log(counter);
  }

  console.log("last counter", counter);
}

function loopDoWhile() {
  let counter = 0;
  do {
    counter++;
    console.log("Perulangan ke:", counter);
  } while (counter < 10);
}

// input : [80,30, 60, 55, 32, 60 ,10, 65, 90,12]
// search : 100
// output : [90,10] / [10,90]
