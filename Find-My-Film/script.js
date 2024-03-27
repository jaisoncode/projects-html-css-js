const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDRkNWYxODU4ODRiYmU4MzFkMGYwYmFmNDg2NDk2MCIsInN1YiI6IjY2MDQ3MTkyZWNhZWY1MDE3YWFlZmE4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3jxug3KzdxCHkjJfjyOvscURKtmXFTozA6wZdJSky9A'
    }
};

let searchQuery = '';

const inputSearch = document.querySelector('#search-movie');
const btnFind = document.querySelector('#btn-search');

inputSearch.addEventListener('input', () => {
     let searchQuery = inputSearch.value.trim(); 
     console.log(searchQuery)
    if (searchQuery !== '') { 
        const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;
        fetchData(apiUrl, options);
    }
})

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados.');
        }
        return response.json();
    })
    .then(data => {
        const filmes = data.results;
        exibir(filmes);
    })
    .catch(error => {
        console.error('Erro:', error);
    });

function fetchData(apiUrl, options) {
    fetch(apiUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados.');
            }
            return response.json();
        })
        .then(data => { 
            const filmes = data.results;
            exibir(filmes);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function exibir(filmes) {
    let output = "";
    filmes.forEach(element => {
        output += `<div class="card-movie">
        <div class="overview">
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="panda">
            <div class="description">
                <h3>Overview</h3>
                <p >${element.overview}
                   </p>
                </div>
        </div>
        <div class="detail">
            <span class="title-movie">${element.title}</span>
            <span class="score">${element.vote_average.toFixed(1)}</span>
        </div>
  
    </div>`;
    });

    document.querySelector('.content-movies').innerHTML = output;
}


