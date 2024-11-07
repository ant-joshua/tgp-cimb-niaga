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

const studentPaymentList = [
  {
    studentId: 1,
    feeName: "SPP",
    payment: 1000000,
  },
  {
    studentId: 2,
    feeName: "SPP",
    payment: 2000000,
  },
];

async function fetchStudentPaymentById(id) {
  let studentPayments = studentPaymentList.find(
    (studentPayment) => studentPayment.studentId === id
  );

  if (!studentPayments) {
    return Promise.reject("Student payment not found");
  }

  return Promise.resolve(studentPayments);
}

async function fetchStudentById(id) {
  return new Promise((resolve, reject) => {
    let student = studentList.find((student) => student.id === id);
    if (student) {
      resolve(student);
    } else {
      reject("Student not found");
    }
  });
}

async function exampleCallbackHell() {
  fetchStudentById(1)
    .then((student) => {
      fetchStudentPaymentById(student.id)
        .then((studentPayment) => {
          console.log(studentPayment);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

async function main() {
  const getStudent = await fetchStudentById(1);
  const getStudentPayment = await fetchStudentPaymentById(getStudent.id);
  console.log(getStudentPayment);
}

main();
