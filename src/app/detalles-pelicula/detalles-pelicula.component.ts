import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.scss']
})
export class DetallesPeliculaComponent {
  movie_id: number = 0;
  pelicula: any = null;
  comentarios: string[] = [];
  showModal: boolean = false;
  trailerUrl: string = '';

  constructor(private peliculaService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movie_id = +params['id'];
      this.peliculaService.obtenerDetalles(this.movie_id).subscribe((data: any) => {
        this.pelicula = {
          title: data.title,
          overview: data.overview,
          poster_path: data.poster_path,
          vote_average: data.vote_average,
          genres: data.genres,
          runtime: data.runtime,
          release_date: data.release_date,
          cast: []
        };
        // Obtener elenco de la película
        this.peliculaService.obtenerActores(this.movie_id).subscribe((actores: any) => {
          this.pelicula.cast = actores.cast.map((actor: any) => actor.name);
        });
        // Obtener comentarios de la película
        this.peliculaService.obtenerComentarios(this.movie_id).subscribe((comentarios: any) => {
          this.comentarios = comentarios.results.slice(0, 4).map((comentario: any) => comentario.content);
        });
        // Obtener tráiler de la película
        this.peliculaService.obtenerTrailerPelicula(this.movie_id).subscribe((trailers: any) => {
          const trailer = trailers.results.find((video: any) => video.type === 'Trailer');
          if (trailer) {
            this.trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;
          }
        });
      });
    });
  }

  getGenresString(genres: any[]): string {
    return genres.map(genre => genre.name).join(', ');
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
