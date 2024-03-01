import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  movies: any[] = [];
  peliculas: any[] = [];
  buscador: string = '';
  terminoBusqueda!: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const searchTerm = this.movieService.busqueda;
    if (searchTerm) {
      this.buscador = searchTerm;
      this.getMovies(searchTerm);
    }
  }

  buscar(): void {
    if (this.buscador.trim() !== '') {
      this.movieService.buscarPeliculas(this.buscador)
        .subscribe((data: any) => {
          this.movies = data.results;
        });
    }
  }

  getMovies(query: string): void {
    this.movieService.buscarPeliculas(query).subscribe(data => {
      this.peliculas = data.results;
    }, error => {
      console.error(error);
    });
  }
  obtenerDetalles(movieId: number): void {
    this.movieService.obtenerDetalles(movieId)
      .subscribe((detalle: any) => {
        console.log(detalle); 
      });
  }
}
