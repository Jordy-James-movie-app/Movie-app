"use strict"
//API url
const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"
//Fetch for movies
const getMovies = fetch(`${moviesUrl}`)


// Populates movies to cards
function moviesRequest () {
    let movielist = $("#movieList")
    $("#loadingMessage").show();
    $("#content").hide();
    getMovies
        .then(res => res.json())
        .then(movies => {
            let html = '<ul>'
            for (let movie of movies) {
                html += `<div ><li class="movie col-12 col-md-6 col-xl-4"><div class = "card-body"></div>`
                html += '<h4>Title:</h4> <h4 class = "card-title" style="font-weight: normal">'  + movie.title + '</h4>';
                html += '<h4>Rating:</h4><h6 class = "card-title">' + movie.rating + '</h6>';
                html += '<h4>Description:</h4><p class = "card-text">' + movie.plot + '</p>';
            }
            html += '</ul>';
            movielist.html(html);
            $("#loadingMessage").hide();
            $("#content").show();
        })
}

moviesRequest()
// function addMovies() {
//
// }

//event listeners for add movie button
$("#add").click(function (event){
    event.preventDefault()
    let addMovieTitle = document.getElementById("movieTitle").value;
    let addMovieRating = document.getElementById("movieRating").value;
    let addMovieDescription = document.getElementById("movieDescription").value;
    const addedMovie = {
        title: addMovieTitle,
        rating: addMovieRating,
        plot: addMovieDescription
    };
    const postAddedMovie = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/jason',
        },
        body: JSON.stringify(addedMovie),
    };
    fetch(moviesUrl, postAddedMovie)
        .then(response => console.log(response))
        .catch(error => console.log(error));

});




//define function that takes in movie object
//make a fetch request to the correct url to post.
//then invoke moviesRequest to show movies added

