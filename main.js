import { films } from '/assets/films.js'
// import { people } from '/assets/people.js'
//import { starships } from '/assets/starships.js'
//import { planets } from '/assets/planets.js'
import { senatorData } from './assets/senators.js'


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let filmList = document.querySelector("#film-list")

films.forEach((film) => {
  let listItem = document.createElement('li')
  listItem.textContent = film.title
  filmList.appendChild(listItem)
  console.log(film.title)
})


let crawlList = document.querySelector("#crawl-list")

films.forEach((film) => {
  let listItem3 = document.createElement('li')
  listItem3.textContent = film.opening_crawl
  crawlList.appendChild(listItem3)
  console.log(film.opening_crawl)
})

const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party === "R")

const democrats = senators.filter(senator => senator.party === 'D')

const males = senators.filter(senator => senator.gender === "M")

const females = senators.filter(senator => senator.gender === "F")

const loyalRepublican = republicans.reduce((acc, senator) => senator.votes_with_party_pct > 0 ? senator : acc, 0)

console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)

console.log(`There are ${males.length} men and ${females.length} women in the senate.`)


// let personList = document.querySelector("#person-list")

// people.forEach((people) => {
//   let listItem2 = document.createElement('li')
//   listItem2.textContent = people.name
//   personList.appendChild(listItem2)
//   console.log(people.name)
// })
//console.log(films[2])






