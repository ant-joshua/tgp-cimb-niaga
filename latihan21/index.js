// fetch("http://127.0.0.1:5500/latihan21/students.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function fetchPokemonApi() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const data = await response.json();

  console.log(data);
}

fetchPokemonApi();

// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg
