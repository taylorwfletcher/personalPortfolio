import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === "R")

const democrats = senators.filter(senator => senator.party === 'D')

const males = senators.filter(senator => senator.gender === "M")

const females = senators.filter(senator => senator.gender === "F")

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)

console.log(`There are ${males.length} men and ${females.length} women in the senate.`)

console.log(`The most loyal republican is Senator ${loyalRepublican.first_name} ${loyalRepublican.last_name}.`)

console.log(`The most loyal democrat is Senator ${loyalDemocrat.first_name} ${loyalDemocrat.last_name}.`)


const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    return senator
})

console.log(senWithPics)

let pictureDiv = document.querySelector('.senContainer')
senWithPics.forEach(senator => {
let senatorPic = document.createElement('img')
let senatorFig = document.createElement('figure')
let senatorCap = document.createElement('figcaption')
senatorCap.textContent = `${senator.first_name} ${senator.last_name} (${senator.party} - ${senator.state})`
senatorPic.src = senator.imgURL
senatorFig.appendChild(senatorPic)
senatorFig.appendChild(senatorCap)
pictureDiv.appendChild(senatorFig)
})