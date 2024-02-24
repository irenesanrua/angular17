import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies() {
    this.movieService.getFavoriteMovies().subscribe(
      (response) => {
        this.favoriteMovies = response.results; // Assuming the results are in an array called 'results'
      },
      (error) => {
        console.error('Error fetching favorite movies:', error);
      }
    );
  }
}

