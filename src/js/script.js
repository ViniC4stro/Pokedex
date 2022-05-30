const listaSelecaoPokemons = document.querySelectorAll('.pokemon1')

const pokemonsCard = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.open')  

        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado  + '-card'

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')

        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)

        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})