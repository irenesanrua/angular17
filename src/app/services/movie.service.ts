import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'e79fbfbf56f5c1d7cbb5c4d71bbc9693';
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private apiUrl2 = 'https://api.themoviedb.org/3/movie/top_rated';
  busqueda: string = '';

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number = 1): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<any>(url);
  }

  getTopMovies(page: number = 1): Observable<any> {
    const url = `${this.apiUrl2}?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<any>(url);
  }

  buscarPeliculas(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url);
  }

  setPalabraBusqueda(palabra: string) {
    this.busqueda = palabra; //asignamos a la busqueda el parametro
  }

  getPalabraBusqueda() {
    return this.busqueda; //obtenemos el valor ya asignado
    ;
  }

  obtenerDetalles(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  obtenerComentarios(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get<any>(url);
  }

  obtenerActores(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  obtenerTrailerPelicula(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // para obtener listado de películas de la watchlist y de favoritos
  getWatchlistMovies(): Observable<any> {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      }
    };
    const url = 'https://api.themoviedb.org/3/account/20955958/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
    return this.http.get<any>(url, options);
  }

  getFavoriteMovies(): Observable<any> {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      }
    };
    const url = 'https://api.themoviedb.org/3/account/20955958/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
    return this.http.get<any>(url, options);
  }
  // agregar y eliminar de la watchlist
  agregarAWatchlist(movieId: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/account/20955958/watchlist';
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      },
    };
    const body = {
      "media_type": "movie",
      "media_id": movieId,
      "watchlist": true
    };
  
    return this.http.post<any>(url, body, options);
  }

  eliminarDeWatchlist(movieId: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/account/20955958/watchlist';
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      },
    };
    const body = {
      "media_type": "movie",
      "media_id": movieId,
      "watchlist": false
    };
  
    return this.http.post<any>(url, body, options);
  }

  //agregar y elimianr de mi lista de favoritos
  agregarAFavoritos(movieId: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/account/20955958/favorite';
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      },
    };
    const body = {
      "media_type": "movie",
      "media_id": movieId,
      "favorite": true
    };
  
    return this.http.post<any>(url, body, options);
  }

  eliminarDeFavoritos(movieId: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/account/20955958/favorite';
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlmYmZiZjU2ZjVjMWQ3Y2JiNWM0ZDcxYmJjOTY5MyIsInN1YiI6IjY1YjhlMDg5OGMzMTU5MDE3YmYyNDI4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGeNmNlLhNUFY-YxNO3Lmp633q7ap2naUyyRXbaz_j4'
      },
    };
    const body = {
      "media_type": "movie",
      "media_id": movieId,
      "favorite": false
    };
  
    return this.http.post<any>(url, body, options);
  }

  
  }