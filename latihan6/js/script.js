const anggotaList = [
  {
    name: "joshua",
    simpanan: 10000,
  },
];

let isEdit = false;

function renderAnggota() {
  const anggotaListElement = document.getElementById("anggotaList");
  let row = "";
  anggotaList.forEach((value, index) => {
    row += `<tr>
            <td>${value.name}</td>
            <td>${value.simpanan}</td>
            <td>
                <button onclick="deleteAnggota(${index})">
                Hapus
                </button>
                <button onclick="updateAnggota(${index})">
                Edit
                </button>
            </td>
        </tr>`;
  });

  anggotaListElement.innerHTML = row;

  resetForm();
}

function updateAnggota(index) {
  const submitBtn = document.getElementById("submitBtn");
  const inputName = document.getElementById("inputName");
  const inputSimpanan = document.getElementById("inputSimpanan");
  const editIndex = document.getElementById("editIndex");

  inputName.value = anggotaList[index].name;
  inputSimpanan.value = anggotaList[index].simpanan;
  submitBtn.value = "isUpdate";
  submitBtn.innerText = "Update";
  editIndex.value = index;
  isEdit = true;
  //   selectedIndex = index;
}

function submitAnggota() {
  const submitBtn = document.getElementById("submitBtn");
  const inputName = document.getElementById("inputName");
  const inputSimpanan = document.getElementById("inputSimpanan");
  const selectedIndex = document.getElementById("editIndex");

  const nameValue = inputName.value;
  const simpananValue = inputSimpanan.value;

  //   if (!nameValue || !simpananValue || simpananValue != "") {
  //     alert("Tolong isi nama dan simpanannnya");
  //     return;
  //   }

  if (isEdit) {
    anggotaList[selectedIndex.value] = {
      name: inputName.value,
      simpanan: inputSimpanan.value,
    };
    // anggotaList[selectedIndex].name = inputName.value;
    // anggotaList[selectedIndex].simpanan = inputSimpanan.value;
  } else {
    anggotaList.push({
      name: nameValue,
      simpanan: simpananValue,
    });
  }

  submitBtn.value = "isNormal";
  submitBtn.innerText = "Simpan";
  renderAnggota();
}

function resetForm() {
  const inputName = document.getElementById("inputName");
  const inputSimpanan = document.getElementById("inputSimpanan");
  const selectedIndex = document.getElementById("editIndex");

  inputName.value = "";
  inputSimpanan.value = null;
  selectedIndex.value = null;
  isEdit = false;
}

function addAnggota() {
  const submitBtn = document.getElementById("submitBtn");
  const inputName = document.getElementById("inputName");
  const inputSimpanan = document.getElementById("inputSimpanan");

  const nameValue = inputName.value;
  const simpananValue = inputSimpanan.value;

  //   if (!nameValue || !simpananValue || simpananValue != "") {
  //     alert("Tolong isi nama dan simpanannnya");
  //     return;
  //   }

  if (submitBtn.value == "isUpdate") {
    anggotaList[selectedIndex].name = inputName.value;
    anggotaList[selectedIndex].simpanan = inputSimpanan.value;
  } else {
    anggotaList.push({
      name: nameValue,
      simpanan: simpananValue,
    });
  }

  submitBtn.value = "isNormal";
  submitBtn.innerText = "Simpan";
  renderAnggota();
}

function deleteAnggota(index) {
  anggotaList.splice(index, 1);

  renderAnggota();
}

renderAnggota();
