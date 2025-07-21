var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
});
pegaPokemons(100)
function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+quantidade)
.then(response => response.json())
.then(allpokemon => {
    
    var pokemons = [];

    allpokemon.results.map(function(val){
            

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({name:val.name,imagem:pokemonSingle.sprites.front_default});


                if(pokemons.length == 10){

                   var pokemonBoxes = document.querySelector('.pokemon-boxes')
                   pokemonBoxes.innerHTML = "";

                    pokemons.map(function(val){

                        pokemonBoxes.innerHTML+=`

                        
                        <div class="pokemon-box">
                            <img src="`+val.imagem+`" />
                            <p>`+val.name+`</p>
                        </div>
                        `

                    });
                }
            })
    })

    pokemons.map((val)=>{
        console.log(val.name)
    })
});
}