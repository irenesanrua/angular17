import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlistMovies: any[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getWatchlistMovies();
  }

  getWatchlistMovies() {
    this.movieService.getWatchlistMovies().subscribe(
      (response) => {
        this.watchlistMovies = response.results;
      },
      (error) => {
        console.error('Error fetching watchlist movies:', error);
      }
    );
  }
}
