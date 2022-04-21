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

let pokemon = ''; // declare a empty variable
 // for loop that iterates each pokemon in the above array
for(let i = 0; i < pokemonList.length; i++) {
  // added condition for the pokemon height > 5
  if (pokemonList[i].height > 5) {
    pokemon = `<p class='pokemon-list'>${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big!</p>`;
    document.write(pokemon);
  } else {
    document.write(`<p class='pokemon-list'>${pokemonList[i].name} (height: ${pokemonList[i].height})</p>`);
  }
}
