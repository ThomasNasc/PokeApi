const listadePokemons = document.querySelector(".listaDePokemons");
const displayNomePokemon = document.querySelector(".nome");
const pokemonInfo = document.querySelector(".infoPokemon");
const displaystatsPokemon = document.querySelector(".stats");
const displayMovesPokemon = document.querySelector(".moves");
const displayTiposPokemon = document.querySelector(".type");
const displayFotoPokemon = document.querySelector(".foto");

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
    // console.log(pokemons)
    pokemons.map((pokemon) => {
      const newPokemon = document.createElement("ul");
      const namePokemon = document.createElement("h3");
      const fotoPokemon = document.createElement("img");
      const idPokemon = document.createElement("li");

      namePokemon.innerHTML = pokemon.name.toUpperCase();
      fotoPokemon.src = pokemon.sprites.front_default;
      idPokemon.innerHTML = pokemon.id;
      newPokemon.appendChild(namePokemon);
      newPokemon.appendChild(fotoPokemon);

      listadePokemons.appendChild(newPokemon);
    
      // switch (pokemon.types[0].type.name) {
      //   case "fire":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "water":
      //     pokemonInfo.style.backgroundColor = "blue";
      //     break;
      //   case "grass":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "bug":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "ghost":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "psychic":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "ground":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "electric":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "normal":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "poison":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "fairy":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "rock":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "fighting":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "ice":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "dragon":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "steel":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;
      //   case "dark":
      //     pokemonInfo.style.backgroundColor = "red";
      //     break;

      //   default:
      //     break;
      // }
  

      newPokemon.addEventListener("click", () => {
        pokemonInfo.style.display = "flex"
        displayMovesPokemon.innerHTML = "";
        displayTiposPokemon.innerHTML = "";
        displaystatsPokemon.innerHTML = "";
        console.log(pokemon);
        displayNomePokemon.innerHTML = pokemon.name.toUpperCase();

        displayFotoPokemon.src = pokemon.sprites.other.home.front_default;

        pokemon.moves.map((move) => {
          var novoMovimento = document.createElement("li");
          novoMovimento.innerHTML = move.move.name;
          displayMovesPokemon.appendChild(novoMovimento);
        });
        pokemon.stats.map((stat) => {
          var novoStat = document.createElement("li");
          novoStat.innerHTML = stat.stat.name.toUpperCase() + ": " + stat.base_stat;
          displaystatsPokemon.appendChild( novoStat);
        });
        pokemon.types.map((type) => {
          var novoType = document.createElement("li");
          novoType.innerHTML = type.type.name.toUpperCase();
          displayTiposPokemon.appendChild(novoType);
        });
    
      });
    });
  });
}
function fechaInfo() {
  pokemonInfo.style.display = "none"
  
}

getPokemon();
