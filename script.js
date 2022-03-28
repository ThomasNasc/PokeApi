const listadePokemons = document.querySelector(".listaDePokemons");
const displayNomePokemon = document.querySelector(".nome");
const pokemonInfo = document.querySelector(".infoPokemon");
const displaystatsPokemon = document.querySelector(".stats");
const displayMovesPokemon = document.querySelector(".moves");
const displayTiposPokemon = document.querySelector(".type");
const displayFotoPokemon = document.querySelector(".foto");
const design3D = document.querySelector(".ThreeD");
const design2D = document.querySelector(".TwoD");
function getPokemon() {
  const pokemonPromisses = [];
  for (let i = 1; i <= 150; i++) {
    pokemonPromisses.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) =>
        response.json()
      )
    );
  }

  Promise.all(pokemonPromisses).then((pokemons) => {

     
    pokemons.map((pokemon) => {
      const newPokemon = document.createElement("ul");
      const namePokemon = document.createElement("h3");
      const fotoPokemon = document.createElement("img");
      var pokemonImgDesign = pokemon.sprites.other.home.front_default;
      namePokemon.innerHTML = pokemon.name.toUpperCase();
      fotoPokemon.src = pokemon.sprites.other.home.front_default;

      newPokemon.appendChild(namePokemon);
      newPokemon.appendChild(fotoPokemon);

      listadePokemons.appendChild(newPokemon);

    
      design2D.addEventListener("click", () => {
        fotoPokemon.src = pokemon.sprites.front_default;
      });
      design3D.addEventListener("click", () => {
        fotoPokemon.src = pokemon.sprites.other.home.front_default;
      });
      selectColor(pokemon.types[0].type.name,fotoPokemon)
      newPokemon.addEventListener("click", () => {
        pokemonInfo.style.display = "flex";
        displayMovesPokemon.innerHTML = "";
        displayTiposPokemon.innerHTML = "";
        displaystatsPokemon.innerHTML = "";
       
        displayNomePokemon.innerHTML = pokemon.name.toUpperCase();

        displayFotoPokemon.src = pokemonImgDesign;
        design2D.addEventListener("click", () => {
          displayFotoPokemon.src = pokemon.sprites.front_default;
          pokemonImgDesign = pokemon.sprites.front_default;
        });
        design3D.addEventListener("click", () => {
          displayFotoPokemon.src = pokemon.sprites.other.home.front_default;
          pokemonImgDesign = pokemon.sprites.other.home.front_default;
        });
        selectColor(pokemon.types[0].type.name,pokemonInfo)
        pokemon.moves.map((move) => {
          var novoMovimento = document.createElement("li");
          novoMovimento.innerHTML = move.move.name;
          displayMovesPokemon.appendChild(novoMovimento);
        });
        pokemon.stats.map((stat) => {
          var novoStat = document.createElement("li");
          novoStat.innerHTML =
            stat.stat.name.toUpperCase() + ": " + stat.base_stat;
          displaystatsPokemon.appendChild(novoStat);
        });
        pokemon.types.map((type) => {
          var novoType = document.createElement("li");
          novoType.innerHTML = type.type.name.toUpperCase();
          displayTiposPokemon.appendChild(novoType);
          selectColor(type.type.name, novoType)
        });
      });
    });


  });
}
function fechaInfo() {
  pokemonInfo.style.display = "none";
}
getPokemon();

function selectColor(tipo, local) {
  switch (tipo) {
    case "fire":
      local.style.backgroundColor = "#DC4858";
      break;
    case "water":
      local.style.backgroundColor = "rgb(0, 255, 255)";
      break;
    case "grass":
      local.style.backgroundColor= "#79D05B";
      break;
    case "bug":
      local.style.backgroundColor = "#669D59";
      break;
    case "ghost":
      local.style.backgroundColor= "#AEB3AD";
      break;
    case "psychic":
      local.style.backgroundColor = "#D9218F";
      break;
    case "ground":
      local.style.backgroundColor = "#6A4C1A";
      break;
    case "electric":
      local.style.backgroundColor = "#FCFC80";
      break;
    case "normal":
      local.style.backgroundColor = "#C6A2AE";
      break;
    case "poison":
      local.style.backgroundColor = "#70608D";
      break;
    case "fairy":
      local.style.backgroundColor= "#D81468";
      break;
    case "rock":
      local.style.backgroundColor= "#BCC0C2";
      break;
    case "fighting":
      local.style.backgroundColor = "#DC623B";
      break;
    case "ice":
      local.style.backgroundColor = "#E9F7F8";
      break;
    case "dragon":
      local.style.backgroundColor = "#83BDCB";
      break;
    case "steel":
      pokemonInfo.style.backgroundColor = "#7ECB9F";
      break;
    case "dark":
      local.style.backgroundColor = "#5F5E7E";
      break;
    case "flying":
    local.style.backgroundColor = "#4E5661";
      break;
    default:
      break;
  }
}
