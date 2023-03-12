const body = document.querySelector("#films")

fetch("https://api.tvmaze.com/show")
    .then((response) => response.json())
    .then((data) => array(data));

function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        body.innerHTML +=
            `
            <div class="col-3" style="margin-top: 30px;" >
        <div class="card" style="width: 18rem;">
        <img src="${arr[i].image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Name: ${arr[i].name}</h5>
          <p class="card-text">Type of movie: ${arr[i].genres}</p>
          <p class="card-text">IMDB: ${arr[i].rating.average}</p>     
          <p class="card-text">Language: ${arr[i].language}</p>
          <a href="${arr[i].url}" class="btn btn-primary">Go to movie</a>
        </div>
      </div>
      </div>
        `
    }



}