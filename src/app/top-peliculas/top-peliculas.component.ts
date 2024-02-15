import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-peliculas',
  templateUrl: './top-peliculas.component.html',
  styleUrl: './top-peliculas.component.scss'
})
export class TopPeliculasComponent {
  topMovies: any[] = [];

  constructor(private movieService: MovieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadTopMovies();
  }

  loadTopMovies() {
    this.movieService.getTopMovies().subscribe(response => {
      // Ordenar las películas por nota
      this.topMovies = response.results.slice(0, 18);
    });
  }
}
