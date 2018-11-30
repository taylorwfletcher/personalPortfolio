import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === "R")

const democrats = senators.filter(senator => senator.party === 'D')

const males = senators.filter(senator => senator.gender === "M")

const females = senators.filter(senator => senator.gender === "F")

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

// const senMajLead = senators.reduce(acc, senator => senator.leadership_role === "Majority Leader" ? senator : acc, 0)

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)

console.log(`There are ${males.length} men and ${females.length} women in the senate.`)

console.log(`The most loyal republican is Senator ${loyalRepublican.first_name} ${loyalRepublican.last_name}.`)

console.log(`The most loyal democrat is Senator ${loyalDemocrat.first_name} ${loyalDemocrat.last_name}.`)

// console.log(`${senMajLead.first_name} ${senMajLead.last_name} is the Senate Majority Leader.`)


const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    return senator
})

console.log(senWithPics)

let pictureDiv = document.querySelector('.senContainer')
senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    senatorFig.className = "sen-card"
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name} (${senator.party} - ${senator.state})`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    pictureDiv.appendChild(senatorFig)
    })

let statsDiv = document.querySelector('.senStats')
let loyalRep = document.createElement('p')
let loyalDem = document.createElement('p')
let senGender = document.createElement('p')
let senSplit = document.createElement('p')
loyalRep.textContent = `The most loyal Republican is Senator ${loyalRepublican.first_name} ${loyalRepublican.last_name} who has voted along party lines ${loyalRepublican.votes_with_party_pct}% of the time.`
loyalDem.textContent = `The most loyal Democrat is Senator ${loyalDemocrat.first_name} ${loyalDemocrat.last_name} who has voted along party lines ${loyalDemocrat.votes_with_party_pct}% of the time.`
senGender.textContent = `There are ${males.length} men and ${females.length} women in the senate.`
senSplit.textContent = `The senate is made up of ${republicans.length} Republicans and ${democrats.length} Democrats.`
statsDiv.appendChild(senGender)
statsDiv.appendChild(senSplit)
statsDiv.appendChild(loyalRep)
statsDiv.appendChild(loyalDem)


// SCROLL TO TOP BUTTON --------------------------------------------------------------
// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        document.getElementById("senBtn").style.display = "block";
    } else {
        document.getElementById("senBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}