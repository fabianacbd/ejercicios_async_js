document.addEventListener("DOMContentLoaded", () => {
    const pokemonImageElement = document.querySelector("#pokemon-image");

    function getRandomPokemon() {
        return Math.floor(Math.random() * 1010) + 1;
    }

    async function fetchPokemon() {
        const pokemonId = getRandomPokemon();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        pokemonImageElement.src = data.sprites.front_default;
    }
    fetchPokemon();
});
