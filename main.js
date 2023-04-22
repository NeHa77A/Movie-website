console.log("welcome to application");
const serchInput = document.getElementById("serchMovie");
const movieContainer = document.querySelector(".container");
//request OMDB API 
// https://www.omdbapi.com/?i=tt3896198&apikey=c6cb3a02

window.addEventListener("input",fetchData);


function fetchData(){
    fetch(`https://www.omdbapi.com/?apikey=c6cb3a02&s=${serchInput.value}`)  //Promise generating
    .then(response=>response.json())
    .then((response)=>{
        console.log(response['Search']);
        displayMovies(response['Search']);
    })
    .catch(err=>console.log("Error: ",err));
}

function displayMovies(movies){
    let html="";
    movies.forEach((element,index) => {
        console.log("Index: ");
        console.log(index);
       
        console.log("Element: ");
        console.log(element);
        
        html +=`
        <div class="movie">
            
            <img src="${element.Poster}" alt="">
            <h3>${element.Title}</h3>
            <p>${element.Year}</p>
            <buttom><a href="/details.html?id=${element.imdbID}">View More</a></buttom>
            <br>

        </div>
        `;
    });
    movieContainer.innerHTML = html;
}
