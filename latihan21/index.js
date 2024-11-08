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
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data = await response.json();

  const pokemonList = document.querySelector("#pokemonList");
  let row = "";
  data.results.forEach((pokemon) => {
    const getPokemonId = pokemon.url.split("/")[6];
    const paddedId = getPokemonId.padStart(3, "0");

    const newPokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

    row += `
      <div class="col-md-3">
        <div class="card" style="min-height:500px;">
          <img src="${newPokemonImage}" class="card-img-top"  alt="..." />
          <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text">Deskripsi Pokemon</p>
          </div>
        </div>
      </div>
      `;
  });

  pokemonList.innerHTML = row;
}

fetchPokemonApi();

// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg
