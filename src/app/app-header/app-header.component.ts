import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  popularMovies: any[] = [];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe(response => {
      // Ordenar las películas por popularidad
      this.popularMovies = response.results.sort((a: any, b: any) => b.popularity - a.popularity).slice(0, 3);
    });
  }

  goToSearch(): void {
    this.router.navigate(['/buscador']);
  }
  
}