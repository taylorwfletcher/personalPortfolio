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

let newCard = {
    "base": {
        "Attack": 49, 
        "Defense": 49, 
        "HP": 45, 
        "Sp.Atk": 65, 
        "Sp.Def": 65, 
        "Speed": 45
    }, 
    "cname": "\u5999\u86d9\u79cd\u5b50", 
    "ename": "Bulbasaur", 
    "id": "001", 
    "jname": "\u30d5\u30b7\u30ae\u30c0\u30cd", 
    "type": [
        "\u8349", 
        "\u6bd2"
    ]
}
// pokemon.forEach(poke => {

//     let card = document.createElement('div')
//     console.log(poke.ename)
//     let fig = document.createElement('figure')
//     let img = document.createElement('img')
//     let cap = document.createElement('figcaption')
//     let backDiv = document.createElement('div')
//     backDiv.textContent = poke.cname
//     cap.textContent = poke.ename
//     img.src = `./assets/pokemon-img/${poke.id}${poke.ename}.png`
//     fig.appendChild(img)
//     fig.appendChild(cap)
//     card.appendChild(fig)
//     card.appendChild(backDiv)
//     pokeContainer.appendChild(card)
//     card.classList.add("card")
//     card.addEventListener( 'click', function() {
//         card.classList.toggle('is-flipped');
//       });
// });