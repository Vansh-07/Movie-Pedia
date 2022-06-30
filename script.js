// here we are usignquerySelectorAll because we want to select all the arrows and perform the same function to all



let apiKey = '4a940705';
function getMovie(movieName) {
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        localStorage.setItem('movieName', JSON.stringify(data));
        location.href = "info.html";
    });

}


//loads the movie clicked on the home page
function loadMovie() {
    let moviePoster = document.getElementById('poster');
    let info = document.getElementById('info');

    let movieObj = localStorage.getItem('movieName');
    movieObj = JSON.parse(movieObj)

    let posterUrl = movieObj.Poster;
    moviePoster.innerHTML = `<img class="info-image" src="${posterUrl}" alt="image not found"> `

    info.innerHTML = `<h2 class="movie-info-text">Title: ${movieObj.Title}</h2>
    <h2 class="movie-info-text">Release Date: ${movieObj.Released}</h2>
    <h2 class="movie-info-text">Starcast: ${movieObj.Actors}</h2>
    <h2 class="movie-info-text">Genre: ${movieObj.Genre}</h2>
    <h2 class="movie-info-text">Plot: ${movieObj.Plot}</h2>
    <h2 class="movie-info-text">IMDB Rating: ${movieObj.imdbRating}</h2>`
}



function movieListCreator() { 
    let m = [
        {
            Title: 'Pushpa: The Rise',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg',
            imdbRating: 10
        },
        {
            Title: 'Dus',
            Poster: 'https://m.media-amazon.com/images/M/MV5BOWIyNmExZWQtMDEyZC00ODU0LWI2ZDItMmVlMjUzODM4Mzc1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
            imdbRating: 9
        },
        {
            Title: 'no entry',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZGE1ZDcxNTYtOTA0ZS00ZDEyLTgzZDktZTY3NzQ5ODI5OTYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
            imdbRating: 8
        },
        {
            Title: 'no problem',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMGRlMWIyMjgtNzlmNy00YzgyLTgwMDgtODMwMDMwMjczYzY4XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
            imdbRating: 7
        },
        // {
        //     Title: 'main hoon na',
        //     Poster: 'https://m.media-amazon.com/images/M/MV5BODVkNjU4NGMtODMwNi00ZWU4LWI3ZmYtNjgxNzIyNjY5MmI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        //     imdbRating: 6
        // },
        // {
        //     Title: 'tiger zinda hai',
        //     Poster: 'https://m.media-amazon.com/images/M/MV5BYzM0ZTg2OTEtNzI4My00NjBlLWFhYTctY2E4NzdiYzY1YWYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        //     imdbRating: 5
        // }
    ];
    // let info=[];
    // let obj={};
    // let html = '';
    // console.log(typeof(obj))
    let count=0;
    // m.forEach((element,index) => {
        //     count++;
        //     let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${element}`;
        //     fetch(url).then((response) => {
            //         return response.json();
            //     }).then((data) => {
            // html = `
            //     <div class="movie-list-item">
            //         <img class="movie-list-item-img" src="${data.Poster}">
            //         <span class="movie-list-item-title">${data.Title}</span>
            //         <p class="movie-list-itme-desc">${data.imdbRating}</p>
    
            //         <button class="movie-list-item-button" id="${data.Title}" onclick="getMovie(this.id)">Watch</button>
            //     </div>`;
    //             info[index]=html;
    //     });
    // }); 
    // console.log(info)
    // let x='';
    // info.forEach((element)=>{
        //     console.log(element)
        // })
        // console.log(x);
    let div = document.getElementById('bollywood');
    let html='';
    m.forEach((ele,index)=>{
        html+= `
        <div class="movie-list-item">
            <img class="movie-list-item-img" src="${ele.Poster}">
            <span class="movie-list-item-title">${ele.Title}</span>
            

            <button class="movie-list-item-button" id="${ele.Title}" onclick="getMovie(this.id)">Watch</button>
        </div>`;
    });
    div.innerHTML=html;
}

{/* <p class="movie-list-itme-desc">IMDB Rating: ${ele.imdbRating}</p> */}


// let bolly = document.getElementsByClassName('bolly');
// const x = bolly.querySelectorAll('.img').length;
// console.log(bolly);

const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {

    const items = movieLists[i].querySelectorAll('img').length;
    console.log(items);
    
    let numberOfShifts = 0;
    arrow.addEventListener('click', () => {
        
        const ratio = Math.floor(window.innerWidth / 330);
        numberOfShifts++;

        //ratio here is to make the slider responsive so that we can click more no. of times if the window size is decreased
        //4 in the (4 + numberOfShifts) denotes that we have to click 3 times to see the last item 
        //then after that the sum will be negative and control will enter the else statement

        if (items - (4 + numberOfShifts) + (4 - ratio) >= 0) {
            let trans = movieLists[i].computedStyleMap().get('transform')[0].x.value;
            trans = trans - 360;
            movieLists[i].style.transform = `translateX(${trans}px)`;
        }
        else {
            movieLists[i].style.transform = 'translateX(0)';
            numberOfShifts = 0;
        }


    });
})

