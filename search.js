let movieSearchForm = document.getElementById('form');

movieSearchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('movieName').value;

    //performing api call here to retrieve the information of movie entered
    let apiKey = '4a940705';
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let infoContainer = document.getElementById('infoContainer')
        let html=`<div class="movie-poster" id="poster">
                    <img class="info-image" src="${data.Poster}">
                </div>
                <div class="movie-info" id="info">
                    <h2 class="movie-info-text">Title: ${data.Title}</h2>
                    <h2 class="movie-info-text">Release Date: ${data.Released}</h2>
                    <h2 class="movie-info-text">Starcast: ${data.Actors}</h2>
                    <h2 class="movie-info-text">Genre: ${data.Genre}</h2>
                    <h2 class="movie-info-text">Plot: ${data.Plot}</h2>
                    <h2 class="movie-info-text">IMDB Rating: ${data.imdbRating}</h2>
                </div>`;
        infoContainer.innerHTML=html;
    });
})