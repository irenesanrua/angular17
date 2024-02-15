import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrl: './detalles-pelicula.component.scss'
})
export class DetallesPeliculaComponent {
  movie_id: number = 0;
  movie: any;

  constructor(private http: HttpClient, private peliculaService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movie_id = +params['id'];
      this.peliculaService.obtenerDetalles(this.movie_id).subscribe((data: any) => {
        this.movie = data;
      });
    });
  }
}
