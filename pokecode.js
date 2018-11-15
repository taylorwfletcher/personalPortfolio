import { pokemon } from './assets/pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#poke-container')

pokemon.forEach(poke => {

    let card = document.createElement('div')
    console.log(poke.ename)
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    let backDiv = document.createElement('div')
    backDiv.textContent = poke.cname
    cap.textContent = poke.ename
    img.src = `./assets/pokemon-img/${poke.id}${poke.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
    card.appendChild(backDiv)
    pokeContainer.appendChild(card)
    card.classList.add("card")
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
});