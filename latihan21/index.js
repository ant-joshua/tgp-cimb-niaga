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
          <img src="${newPokemonImage}" id="pokemonImage${getPokemonId}" class="card-img-top"  alt="..." />
          <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text" id="pokemonDetail${getPokemonId}"></p>
          </div>
        </div>
      </div>
      `;

    getPokemonDetail(pokemon.url);
  });

  pokemonList.innerHTML = row;
}

async function getPokemonDetail(url) {
  const response = await fetch(url);

  const data = await response.json();

  const pokemonImage = document.querySelector("#pokemonImage" + data.id);

  pokemonImage.src = data.sprites.other["official-artwork"].front_default;

  const pokemonDetail = document.querySelector("#pokemonDetail" + data.id);

  pokemonDetail.innerHTML = `
    <b>Height:</b> ${data.height} <br>
    <b>Weight:</b> ${data.weight} <br>
    <b>Base Experience:</b> ${data.base_experience} <br>
    <b>Abilities:</b> ${data.abilities
      .map((ability) => ability.ability.name)
      .join(", ")} <br>
  `;
}

fetchPokemonApi();

// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/87.svg
