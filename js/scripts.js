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

// forEach loop that iterates each pokemon in the above array
pokemonList.forEach(function(pokemon) {
  // added condition for the pokemon height > 5
  if (pokemon.height > 5) {
    document.write(`<p class='pokemon-list'>${pokemon.name} (height: ${pokemon.height}) - Wow, that's big!</p>`);
  } else {
    document.write(`<p class='pokemon-list'>${pokemon.name} (height: ${pokemon.height})</p>`);
  }
});
