"use strict"
//url for glitch movie API
const url = "https://ethereal-generated-marshmallow.glitch.me/movies"

 // @returns {Promise<void>}

const getMovies = () => fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(console.error);

getMovies().then(console.log);

// getMovies().then(movies => {
//     let html = '<ul>';
//     for (let movie of movies) {
//         html += `<li>${movie.title}</li>`
//     }
//     html += '</ul>';
//     document.write(html);
// });

