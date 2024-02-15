import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
  movies: any[] = [];
  buscador: string = '';

  constructor(private movieService: MovieService) {}

  buscar(): void {
    this.movieService.buscarPeliculas(this.buscador)
      .subscribe((data: any) => {
        this.movies = data.results;
      });
  }

  obtenerDetalles(movieId: number): void {
    this.movieService.obtenerDetalles(movieId)
      .subscribe((detalle: any) => {
        console.log(detalle); // Aquí puedes manejar los detalles de la película, por ejemplo, abrir un modal o navegar a una nueva página.
      });
  }
}


