import { films } from '/assets/films.js'
// import { people } from '/assets/people.js'
//import { starships } from '/assets/starships.js'
//import { planets } from '/assets/planets.js'


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




// let personList = document.querySelector("#person-list")

// people.forEach((people) => {
//   let listItem2 = document.createElement('li')
//   listItem2.textContent = people.name
//   personList.appendChild(listItem2)
//   console.log(people.name)
// })
//console.log(films[2])






