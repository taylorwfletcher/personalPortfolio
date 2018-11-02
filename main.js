import { films } from '/assets/films.js'
// import { people } from '/assets/people.js'
//import { starships } from '/assets/starships.js'
//import { planets } from '/assets/planets.js'


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





