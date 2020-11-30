"use strict"
// //url for glitch movie API
// const url = "https://ethereal-generated-marshmallow.glitch.me/movies"
//
//  // @returns {Promise<void>}
//
// const getMovies = () => fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(console.error);
//
// getMovies().then(console.log);

// getMovies().then(movies => {
//     let html = '<ul>';
//     for (let movie of movies) {
//         html += `<li>${movie.title}</li>`
//     }
//     html += '</ul>';
//     document.write(html);
// });

const moviesUrl = "https://ethereal-generated-marshmallow.glitch.me/movies"

const getMovies = fetch(`${moviesUrl}`)

//Displays loading message until fetch has completed
function pageLoading(){
    $(document).ajaxStart(function(){
        $("#loadingMessage").show();
    });
    $(document).ajaxComplete(function(event, request){
        $("#loadingMessage").hide();
    });
}


function moviesRequest () {
    getMovies
        .then(res => res.json())
        .then(movies => {
            let html = '<ul>'
            for (let movie of movies) {
                html += `<li>${movie.title}</li>`
            }
            html += '</ul>';
            document.write(html);
        })
}

moviesRequest()

