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
                html += `<div ><li class="movie col-12 col-md-6 col-xl-4"><img src="https://loremflickr.com/320/240"><div class = "card-body"></div>`
                html += '<h4>Title:</h4> <h4 class = "card-title" style="font-weight: normal">'  + movie.title + '</h4>';
                html += '<h4>Rating:</h4><h6 class = "card-title">' + movie.rating + '</h6>';
                html += '<h4>Description:</h4><p class = "card-text">' + movie.plot + '</p>';
                html += '<h5>Made a mistake? Change the movie information by filling out the new information below!</h5><br><form>\n' +
                    '                <div class="form-group" id="title">\n' +
                    '                    <label for="movieTitle">Movie title</label>\n' +
                    '                    <input class="form-control" id="movieTitle" placeholder="Movie title">\n' +
                    '                </div>\n' +
                    '                <div class="form-group" id="rating">\n' +
                    '                    <label for="rating">Rating</label>\n' +
                    '                    <select class="form-control" id="movieRating">\n' +
                    '                        <option value="1">1 star</option>\n' +
                    '                        <option value="2">2 stars</option>\n' +
                    '                        <option value="3">3 stars</option>\n' +
                    '                        <option value="4">4 stars</option>\n' +
                    '                        <option value="4">5 stars</option>\n' +
                    '                    </select>\n' +
                    '                </div>\n' +
                    '                <div class="form-group" id="Description">\n' +
                    '                    <label for="movieDescription">Movie description</label>\n' +
                    '                    <textarea class="form-control" id="movieDescription" rows="3" placeholder="Tell us about this movie!"></textarea>\n' +
                    '                </div>\n' +
                    '                <button id="edit">Change movie information</button>\n' +
                    '            </form><br>'
                html += '<h5>Wanna remove a movie? click the button below!</h5><br><button class= id="delete">Delete saved movie</button>';
            }
            html += '</ul>';
            movielist.html(html);
            $("#loadingMessage").hide();
            $("#content").show();
        })
}

moviesRequest()

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
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(addedMovie),
    };
    fetch(moviesUrl, postAddedMovie)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    return moviesRequest()
});

//delete button
$("#delete").click(function (event){
    event.preventDefault();
    const deleteMovies = {
        Method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
        fetch(moviesUrl, deleteMovies)
            .then(response => console.log(response))
            .catch(error => console.log(error));

});

$("#edit").click(function (event){
    event.preventDefault();
    let addMovieTitle = document.getElementById("movieTitle").value;
    let addMovieRating = document.getElementById("movieRating").value;
    let addMovieDescription = document.getElementById("movieDescription").value;
    const editMovie = {
        title: addMovieTitle,
        rating: addMovieRating,
        plot: addMovieDescription
    };
    const postEditMovies = {
        Method: 'PUT',
        header: {
            'Content-Type': 'application/json'
        }
    }
fetch(moviesUrl, postEditMovies)
    .then(response => console.log(response))
    .catch(error => console.log(error));
});



//define function that takes in movie object
//make a fetch request to the correct url to post.
//then invoke moviesRequest to show movies added

