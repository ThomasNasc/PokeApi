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
  for (let i = 1; i <= 600; i++) {
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
      const idPokemon = document.createElement("li")
      var pokemonImgDesign = pokemon.sprites.other.home.front_default
      namePokemon.innerHTML = pokemon.name.toUpperCase();
      fotoPokemon.src = pokemon.sprites.other.home.front_default
      idPokemon.innerHTML = pokemon.id;
      newPokemon.appendChild(namePokemon);
      newPokemon.appendChild(fotoPokemon);

      listadePokemons.appendChild(newPokemon);
    
     design2D.addEventListener("click",()=>{
       fotoPokemon.src =  pokemon.sprites.front_default;
     })
     design3D.addEventListener("click",()=>{
      fotoPokemon.src =  pokemon.sprites.other.home.front_default
    })
  

      newPokemon.addEventListener("click", () => {
        pokemonInfo.style.display = "flex"
        displayMovesPokemon.innerHTML = "";
        displayTiposPokemon.innerHTML = "";
        displaystatsPokemon.innerHTML = "";
    console.log(pokemon)
        displayNomePokemon.innerHTML = pokemon.name.toUpperCase();

      
        displayFotoPokemon.src = pokemonImgDesign
        design2D.addEventListener("click",()=>{
          displayFotoPokemon.src =  pokemon.sprites.front_default;
          pokemonImgDesign = pokemon.sprites.front_default;
        })
        design3D.addEventListener("click",()=>{
          displayFotoPokemon.src =  pokemon.sprites.other.home.front_default
         pokemonImgDesign = pokemon.sprites.other.home.front_default
       })


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
        switch (pokemon.types[0].type.name) {
          case "fire":
            pokemonInfo.style.backgroundColor = "red";
            break;
          case "water":
            pokemonInfo.style.backgroundColor  = ' #65f2ff'
            break;
          case "grass":
            pokemonInfo.style.backgroundColor = "rgb(36,255,81)";
            break;
          case "bug":
            pokemonInfo.style.backgroundColor = "#cb0547";
            break;
          case "ghost":
            pokemonInfo.style.backgroundColor = "#5205cb";
            break;
          case "psychic":
            pokemonInfo.style.backgroundColor = "#cbc305";
            break;
          case "ground":
            pokemonInfo.style.backgroundColor = "#cb9105";
            break;
          case "electric":
            pokemonInfo.style.backgroundColor = "#fffb00";
            break;
          case "normal":
            pokemonInfo.style.backgroundColor = "#dbdbdb";
            break;
          case "poison":
            pokemonInfo.style.backgroundColor = "#ca00ff";
            break;
          case "fairy":
            pokemonInfo.style.backgroundColor = "#ffa0d8";
            break;
          case "rock":
            pokemonInfo.style.backgroundColor = "#a8a8a8";
            break;
          case "fighting":
            pokemonInfo.style.backgroundColor = "#83a4a7";
            break;
          case "ice":
            pokemonInfo.style.backgroundColor = "#c9faff";
            break;
          case "dragon":
            pokemonInfo.style.backgroundColor = "#9da4ff";
            break;
          case "steel":
            pokemonInfo.style.backgroundColor = "#aaaaaa";
            break;
          case "dark":
            pokemonInfo.style.backgroundColor = "#424242";
            break;
  
          default:
            break;
        }
      });
    });
  });
}
function fechaInfo() {
  pokemonInfo.style.display = "none"
  
}

getPokemon();
