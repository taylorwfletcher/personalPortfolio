import { pokemon } from './assets/pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#poke-container')

const frontFig = (element) => {
    let fig = document.createElement('figure')
    fig.className = "card__face card__face--front"
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = element.ename
    img.src = `./assets/pokemon-img/${element.id}${element.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    return fig
}

const infoDiv = (element) => {
    let infoContainer = document.createElement('div')
    infoContainer.className = 'card__face card__face--back'
    let infoName = document.createElement('p')
    infoName.className = "infoName"
    let attack = document.createElement('p')
    let defense = document.createElement('p')
    let HP = document.createElement('p')
    let type = document.createElement('p')
    infoName.textContent = element.jname
    attack.textContent = `Attack: ${element.base.Attack}`
    defense.textContent = `Defense: ${element.base.Defense}`
    HP.textContent = `HP: ${element.base.HP}`
    type.textContent = `Type: ${element.type}`
    infoContainer.appendChild(infoName)
    infoContainer.appendChild(attack)
    infoContainer.appendChild(defense)
    infoContainer.appendChild(HP)
    infoContainer.appendChild(type)
    return infoContainer
}

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(frontFig(poke))
    card.appendChild(infoDiv(poke))
    pokeContainer.appendChild(card)
    card.addEventListener( 'click', function() {
         card.classList.toggle('is-flipped');
      });
})

class Pokemon {
    constructor(id, jname, ename, base, type){
        this.id = id,
        this.jname = jname;
        this.ename = ename,
        this.base = base,
        this.type = type
    }
}

let newPokemon = new Pokemon(249, "\u30eb\u30ae\u30a2", "Lugia", {"Attack": 90, "Defense": 130, "HP": 106}, ["\u8d85\u80fd", "\u98de\u884c"])


let button = document.querySelector('#newCardButton')
button.addEventListener('click', () => {
    console.log('Creating card...')
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(frontFig(newPokemon))
    card.appendChild(infoDiv(newPokemon))
    pokeContainer.appendChild(card)
    card.addEventListener( 'click', function() {
         card.classList.toggle('is-flipped');
    });
})