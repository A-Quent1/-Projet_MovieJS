let input = document.querySelector('#nomFilm');
let button = document.querySelector('button');
let listFilm = document.querySelector('#row');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let film = input.value;
    input.value = '';

    fetch(`https://www.omdbapi.com/?s=${film}&apikey=f6e256e1`)
        .then(response => response.json())
        .then(films => {
            console.log(films);

            films.Search.forEach(film => {
                let imgFilm = document.createElement('div');
                let idFilm = document.createElement('h4');
                let yearFilm = document.createElement('p');

                idFilm.innerHTML = `${film.Title}`;
                yearFilm.innerHTML = `${film.Year}`;
                imgFilm.innerHTML = `<img src ="${film.Poster}"></img>`;
                listFilm.appendChild(imgFilm);
                imgFilm.appendChild(idFilm);
                imgFilm.appendChild(yearFilm);
            });
        });

});
