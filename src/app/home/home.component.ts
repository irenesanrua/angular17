import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  popularMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe(response => {
      // Ordenar las películas por popularidad
      this.popularMovies = response.results.sort((a: any, b: any) => b.popularity - a.popularity).slice(0, 5);
    });
  }
}