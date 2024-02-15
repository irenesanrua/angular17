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

  obtenerDetalles(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Importamos la interfaz Movie, que define los campos de una película
import { Movie } from './movie.model';

// Definimos el decorador @Injectable, que indica que este servicio puede ser inyectado en otros componentes
@Injectable({
  providedIn: 'root'
})
// Definimos la clase MovieService, que tendrá los métodos para obtener las películas
export class MovieService {
  // Definimos la URL base de la API de TMDB
  private baseUrl = 'https://api.themoviedb.org/3/movie';
  // Definimos la clave de la API, que se usará como parámetro en las peticiones
  private apiKey = 'e79fbfbf56f5c1d7cbb5c4d71bbc9693';

  // Inyectamos el HttpClient en el constructor del servicio
  constructor(private http: HttpClient) { }

  // Definimos un método para obtener las películas populares, que devuelve un observable de tipo Movie[]
  getPopularMovies(): Observable<Movie[]> {
    // Definimos la URL completa de la petición, añadiendo el parámetro api_key y el número de página
    const url = ${this.baseUrl}/popular?api_key=${this.apiKey}&page=1;
    // Hacemos la petición GET usando el HttpClient y el operador map, que transforma la respuesta en un array de películas
    return this.http.get(url).pipe(
      map((response: any) => response.results as Movie[])
    );
  }
}
*/

/*
@Injectable({})
export class MovieService {
  private apiKey = 'e79fbfbf56f5c1d7cbb5c4d71bbc9693';
  public url: string;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    this.url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=1`;
    return this.http.get<any[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any): Observable<never> {
    console.error('Error al obtener películas:', error);
    return throwError(error);
  }
}

*/



