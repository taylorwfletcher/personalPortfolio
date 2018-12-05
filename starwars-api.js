import { films } from '/assets/films.js'
// import { people } from '/assets/people.js'
//import { starships } from '/assets/starships.js'
//import { planets } from '/assets/planets.js'

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
  let listItem = document.createElement('li')
  listItem.textContent = film.title
  filmList.appendChild(listItem)
})


let crawlList = document.querySelector("#crawl-list")

films.forEach((film) => {
  let listItem3 = document.createElement('li')
  listItem3.textContent = film.opening_crawl
  crawlList.appendChild(listItem3)
})
