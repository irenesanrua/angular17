import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({})
export class MovieService {
  private apiKey = 'e79fbfbf56f5c1d7cbb5c4d71bbc9693';
  public url:string;

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





