import { senatorData } from './assets/senators.js'

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === "R")

const democrats = senators.filter(senator => senator.party === 'D')

const independents = senators.filter(senator => senator.party === 'I')

const males = senators.filter(senator => senator.gender === "M")

const females = senators.filter(senator => senator.gender === "F")

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const loyalDemocrat = democrats.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

const senMajLead = senators.filter(senator => senator.leadership_role === "Majority Leader")

const senMinLead = senators.filter(senator => senator.leadership_role === "Minority Leader")


// SENATOR CARDS --------------------------------------------------------------
const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id === '412743') {
        senator.imgURL = './assets/senator-img/Cindy_Hyde-Smith.jpg'
    }
    return senator
})

let pictureDiv = document.querySelector('.senContainer')
senWithPics.forEach(senator => {
    let cardContainer = document.createElement('div')
    cardContainer.className = "card-container"
    let senatorPic = document.createElement('img')
    let senatorFig = document.createElement('figure')
    senatorFig.className = "sen-card"
    let senatorCap = document.createElement('figcaption')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name} \n (${senator.party} - ${senator.state})`
    let infoOverlay = document.createElement('div')
    infoOverlay.className = "overlay"
    if (senator.party === "R") {
        infoOverlay.style.backgroundColor = "#db1a21"
    } else if (senator.party === "D") {
        infoOverlay.style.backgroundColor = "#00aef3"
    } else if (senator.party === "I") {
        infoOverlay.style.backgroundColor = "#808080"
    };
    let reelection = document.createElement('p')
    reelection.textContent = `Up for re-election in ${senator.next_election}.`
    let rank = document.createElement('p')
    rank.textContent = `${senator.short_title} ${senator.last_name} is the ${senator.state_rank} senator from ${senator.state}.`
    senatorPic.src = senator.imgURL
    infoOverlay.appendChild(rank)
    infoOverlay.appendChild(reelection)
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    cardContainer.appendChild(senatorFig)
    cardContainer.appendChild(infoOverlay)
    pictureDiv.appendChild(cardContainer)
    })

// let infoOverlay = document.querySelector('#overlayDiv')
// let reelection = document.createElement('p')
// reelection.textContent = `${senator.next_election}`
// infoOverlay.appendChild(reelection)

// STATS SECTION --------------------------------------------------------------
let loyalty = document.querySelector('#loyalty')
let loyalRep = document.createElement('p')
loyalRep.className = "statsBody"
let loyalDem = document.createElement('p')
loyalDem.className = "statsBody"
loyalRep.textContent = `The most loyal Republican is Senator ${loyalRepublican.first_name} ${loyalRepublican.last_name} who has voted along party lines ${loyalRepublican.votes_with_party_pct}% of the time.`
loyalDem.textContent = `The most loyal Democrat is Senator ${loyalDemocrat.first_name} ${loyalDemocrat.last_name} who has voted along party lines ${loyalDemocrat.votes_with_party_pct}% of the time.`
loyalty.appendChild(loyalRep)
loyalty.appendChild(loyalDem)

// PARTY GRAPH --------------------------------------------------------------
let repGraphWidth = Number(`${republicans.length}`) - 10
let demGraphWidth = Number(`${democrats.length}`) - 10
let indieGraphWidth = Number(`${independents.length}`)


let graphDiv = document.querySelector('#partyGraph')
let repSection = document.createElement('p')
repSection.className = "repGraph partyGraphPiece"
repSection.style.width = repGraphWidth + '%'
let demSection = document.createElement('p')
demSection.className = "demGraph partyGraphPiece"
demSection.style.width = demGraphWidth + '%'
let indieSection = document.createElement('p')
indieSection.className = "indieGraph partyGraphPiece"
indieSection.style.width = indieGraphWidth + '%'
repSection.textContent = `${republicans.length} Republicans`
demSection.textContent = `${democrats.length} Democrats`
indieSection.textContent = `${independents.length} Independents`
graphDiv.appendChild(repSection)
graphDiv.appendChild(demSection)
graphDiv.appendChild(indieSection)

// GENDER GRAPH --------------------------------------------------------------
let maleGraphWidth = Number(`${males.length}`) - 10
let femaleGraphWidth = Number(`${females.length}`) - 10

let genderGraph = document.querySelector('#genderGraph')
let maleSection = document.createElement('p')
maleSection.className = "maleGraph genderGraphPiece"
maleSection.style.width = maleGraphWidth + '%'
let femSection = document.createElement('p')
femSection.className = "femGraph genderGraphPiece"
femSection.style.width = femaleGraphWidth + '%'
maleSection.textContent = `${males.length} Men`
femSection.textContent = `${females.length} Women`
genderGraph.appendChild(maleSection)
genderGraph.appendChild(femSection)

// LEADERSHIP SECTION --------------------------------------------------------------
let leaders = document.querySelector('#leaders')
let majority = document.createElement('p')
majority.className = "statsBody"
let minority = document.createElement('p')
minority.className = "statsBody"
majority.textContent = `${senMajLead[0].first_name} ${senMajLead[0].last_name} is the Senate Majority Leader.`
minority.textContent = `${senMinLead[0].first_name} ${senMinLead[0].last_name} is the Senate Minority Leader.`
leaders.appendChild(majority)
leaders.appendChild(minority)


// SCROLL TO TOP BUTTON --------------------------------------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        document.getElementById("senBtn").style.display = "block";
    } else {
        document.getElementById("senBtn").style.display = "none";
    }
}
