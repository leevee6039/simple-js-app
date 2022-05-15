/**
link for pokemonList
https://www.pokemon.com/us/pokedex/
**/

let pokemonRepository = (function() {
  // array list of pokemon
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // function to return all items of pokemonList from outside IIFE
  function getAll() {
    return pokemonList;
  }

  // function to add single pokemon to the pokemonList from outside IIFE
  function add(pokemon) {
    // added condition if true
    if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon ) {
      return pokemonList.push(pokemon);
    } else {
      return alert('To add a pokémon, pokemon type should be object + keys should be {name: , height: , types:[]}')
    }
  }

  // showDetails funtion to log the pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  // function for button click handler/listener
  function pokemonButtonClickHandler(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })
  }

  // function to show pokemon on the browser
  function addListItem(pokemon) {
    const ul = document.querySelector('.pokemon-list'); // taking reference for ul from index.html file
    let listItem = document.createElement('li'); // created list item (li)
    listItem.classList.add('pokemon-list-item'); // adding classList to add class
    ul.appendChild(listItem); // append the li to the ul as its child
    let button = document.createElement('button'); // created button tag
    button.innerText = pokemon.name; // adding pokemon name as the text  to the button
    button.classList.add('pokemon-list-button'); // adding classList to add class
    listItem.appendChild(button); // append the button to the list item as its child

    //addEventListener
    // button.addEventListener('click', function () {
    //   showDetails(pokemon);
    // })

    pokemonButtonClickHandler(button, pokemon);
  }

  // function to fetch Pokémon List from the external API
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  // function to fetch each Pokémon details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details  to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    })
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails
  }
})();

//added log to check the current pokemonList array
console.log(pokemonRepository.getAll());

// forEach loop that iterates each pokemon in the above array
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
})
