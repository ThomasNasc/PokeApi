const listadePokemons = document.querySelector(".listaDePokemons");
const displayNomePokemon = document.querySelector(".nome");
const pokemonInfo = document.querySelector(".infoPokemon");
const displaystatsPokemon = document.querySelector(".stats");
const displayMovesPokemon = document.querySelector(".moves");
const displayTiposPokemon = document.querySelector(".type");
const displayFotoPokemon = document.querySelector(".foto");
const design3D = document.querySelector(".ThreeD");
const design2D = document.querySelector(".TwoD");
var pokemonPromisses = [];
var num1 = 1;
var num2 = 150;
const botaoVerMais = document.querySelector(".verMais")

function vermais(){
  pokemonPromisses = []
  console.log(pokemonPromisses)
  num1 = num2 + 1 ;
  console.log(num1)
  num2 = num2 + 150;
  console.log(num2)
  if(num2 >= 899){
    num1 = 751
    num2 = 898
    botaoVerMais.style.display = "none"
  }
  getPokemon()
}


function getPokemon() {
  for (let i = num1; i <= num2; i++) {
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
          novoMovimento.innerHTML = move.move.name.toUpperCase();
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
      local.style.cssText = "display: flex; background: rgb(147,26,23);      background: linear-gradient(135deg, rgba(147,26,23,1) 30%, rgba(203,67,79,1) 100%);;      ";
      break;
    case "water":
      local.style.cssText = "display: flex; background: rgb(37,201,217);      background: linear-gradient(54deg, rgba(37,201,217,1) 10%, rgba(139,166,247,1) 39%, rgba(147,173,250,1) 52%, rgba(37,79,217,1) 100%);";
      break;
    case "grass":
      local.style.cssText = "display: flex; background: rgb(135,224,104);      background: linear-gradient(135deg, rgba(135,224,104,1) 16%, rgba(52,107,52,1) 100%);";
      break;
    case "bug":
      local.style.cssText = "display: flex; background: rgb(102,157,89); background: linear-gradient(27deg, rgba(102,157,89,1) 22%, rgba(129,144,127,1) 46%, rgba(81,101,78,1) 66%, rgba(39,64,35,1) 100%)";;
      break;
    case "ghost":
      local.style.cssText = "display: flex; background: rgb(74,63,110);      background: linear-gradient(135deg, rgba(74,63,110,1) 14%, rgba(136,104,143,1) 71%, rgba(43,43,93,1) 100%);";;
      break;
      break;
    case "psychic":
      local.style.cssText = "display: flex; background: rgb(141,45,108);      background: linear-gradient(317deg, rgba(141,45,108,1) 17%, rgba(226,37,140,1) 36%, rgba(197,40,129,1) 46%, rgba(141,45,108,1) 100%);";;

      break;
    case "ground":
      local.style.cssText = "display: flex; background: rgb(150,105,48);      background: linear-gradient(135deg, rgba(150,105,48,1) 25%, rgba(96,70,37,1) 100%);";
     
      break;
    case "electric":
      local.style.cssText = "display: flex; background: rgb(230,230,46);  background: linear-gradient(135deg, rgba(230,230,46,1) 0%, rgba(255,255,229,1) 100%)";
   
      break;
    case "normal":
      local.style.cssText = "display: flex; background: rgb(210,174,186);      background: linear-gradient(317deg, rgba(210,174,186,1) 39%, rgba(98,66,77,1) 100%);";;
    
      break;
    case "poison":
      local.style.cssText = "display: flex; background: rgb(101,67,161);      background: linear-gradient(317deg, rgba(101,67,161,1) 17%, rgba(150,113,226,1) 33%, rgba(73,41,124,1) 100%);";;
      
      break;
    case "fairy":
      local.style.cssText = "display: flex; background: rgb(126,4,51);      background: linear-gradient(135deg, rgba(126,4,51,1) 0%, rgba(208,112,154,1) 100%);";;
      break;
    case "rock":
      local.style.cssText = "display: flex; background: rgb(58,24,15);      background: linear-gradient(317deg, rgba(58,24,15,1) 10%, rgba(121,64,37,1) 51%, rgba(58,24,15,1) 100%);";;
      break;
    case "fighting":
      local.style.cssText = "display: flex; background: rgb(102,157,89); background: linear-gradient(27deg, rgba(102,157,89,1) 22%, rgba(129,144,127,1) 46%, rgba(81,101,78,1) 66%, rgba(39,64,35,1) 100%)";;
      break;
    case "ice":
      local.style.cssText = "display: flex; background: rgb(231,245,245);      background: linear-gradient(135deg, rgba(231,245,245,1) 9%, rgba(161,222,251,1) 100%);";;
      break;
    case "dragon":
      local.style.cssText = "display: flex; background: rgb(91,136,148);      background: linear-gradient(135deg, rgba(91,136,148,1) 0%, rgba(142,209,226,1) 100%);";;
      break;
    case "steel":
      local.style.cssText = "display: flex; background: rgb(100,111,105);      background: linear-gradient(317deg, rgba(100,111,105,1) 10%, rgba(121,200,155,1) 51%, rgba(100,111,105,1) 100%);";;
      break;
    case "dark":
      local.style.cssText = "display: flex; background: rgb(10,11,13);      background: linear-gradient(135deg, rgba(10,11,13,1) 10%, rgba(73,73,97,1) 45%, rgba(95,94,126,1) 100%);";;
      break;
    case "flying":
      local.style.cssText = "display: flex; background: rgb(80,98,120);      background: linear-gradient(135deg, rgba(80,98,120,1) 30%, rgba(162,183,204,1) 100%)";
      break;
    default:
      break;
  }
}
