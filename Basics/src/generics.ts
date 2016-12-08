/// <reference path="../node_modules/@types/whatwg-fetch/index.d.ts" />

interface Identity { id: string; }

class Movie implements Identity {
    id: string;
}

function getAsync<T extends Identity>(arg: T): Promise<T> {
    return fetch(`/api/${arg.id}`)
        .then((response: Response) => <Promise<T>>response.json());
}

let movieToFind: Movie = { 'id' : '42' };
getAsync<Movie>(movieToFind)
    .then(movie => {
        console.log(movie.id);
    });
