/**
link for pokemonList
https://www.pokemon.com/us/pokedex/
**/

let pokemonRepository = (function() {
  // array list of pokemon
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'posion']
    },
    {
      name: 'Charmander',
      height: 6,
      types: ['fire']
    },
    {
      name: 'Squirtle',
      height: 5,
      types: ['water']
    },
    {
      name: 'Weedle',
      height: 6,
      types: ['bug', 'posion']
    },
    {
      name: 'Pikachu',
      height: 4,
      types: ['electric']
    }
  ];

  // function to return all items of pokemonList from outside IIFE
  function getAll() {
    return pokemonList;
  }

  // function to add single pokemon to the pokemonList from outside IIFE
  function add(pokemon) {
    return pokemonList.push(pokemon)
  }


  return {
    getAll,
    add
  }
})();
//added log to check the current pokemonList array
console.log(pokemonRepository.getAll());
//updated pokemonList array by adding pokemon
pokemonRepository.add({
  name: 'Onix',
  height: 28,
  types: ['rock', 'ground']
});
//added log to check the updated pokemonList array
console.log(pokemonRepository.getAll());


let updatedPokemonList = pokemonRepository.getAll();
// forEach loop that iterates each pokemon in the above array
updatedPokemonList.forEach(function(pokemon) {
  // added condition for the pokemon height > 5
  if (pokemon.height > 5) {
    document.write(`<p class='pokemon-list'>${pokemon.name} (height: ${pokemon.height}) - Wow, that's big!</p>`);
  } else {
    document.write(`<p class='pokemon-list'>${pokemon.name} (height: ${pokemon.height})</p>`);
  }
});
