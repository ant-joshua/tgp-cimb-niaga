const anggotaList = [
  {
    name: "joshua",
    simpanan: 10000,
  },
];

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
            </td>
        </tr>`;
  });

  anggotaListElement.innerHTML = row;
}

function addAnggota() {
  const inputName = document.getElementById("inputName");
  const inputSimpanan = document.getElementById("inputSimpanan");

  const nameValue = inputName.value;
  const simpananValue = inputSimpanan.value;

  if (!nameValue || !simpananValue || simpananValue != "") {
    alert("Tolong isi nama dan simpanannnya");
    return;
  }

  anggotaList.push({
    name: nameValue,
    simpanan: simpananValue,
  });

  renderAnggota();
}

function deleteAnggota(index) {
  anggotaList.splice(index, 1);

  renderAnggota();
}

renderAnggota();
