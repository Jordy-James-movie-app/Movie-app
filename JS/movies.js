"use strict"

const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"

const getMovies = fetch(`${moviesUrl}`)

function moviesRequest () {
    let movielist = $("#movieList")
        $("#loadingMessage").show();
        $("#content").hide();
    getMovies
        .then(res => res.json())
        .then(movies => {
            let html = '<ul>'
            for (let movie of movies) {
                html += `<li>${movie.title}</li>`
            }
            html += '</ul>';
            movielist.html(html);
        $("#loadingMessage").hide();
        $("#content").show();
        })
}

function addMovies() {

}



addToList.addEventListener('click', addCoffees)