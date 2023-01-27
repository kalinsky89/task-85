import "../scss/app.scss";
import 'regenerator-runtime/runtime'
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  
});

  
async function pokemon(){
  let responce = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((responce)=> responce.json());

  // console.log(responce);
  return responce; 
}

let pokemons = await pokemon();
// let item = 
// console.log(pokemons.results);

pokemons.results.forEach(item => {
  let name= item.name;
  let pokemonItem = document.createElement("li");
  pokemonItem.innerText= name;
  console.log(name);
  document.querySelector('ul').append(pokemonItem);
  
});