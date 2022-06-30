// 4a940705
let apiKey='4a940705';

function getMovie(movieName){
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    });
}
