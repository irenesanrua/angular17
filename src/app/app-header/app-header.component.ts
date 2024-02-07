import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  movies: any[] = []; // Declaración de la propiedad movies y asignación de tipo any[]

  constructor(
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovies(); // Llama al servicio para obtener películas al inicializar el componente
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        // Almacena las películas obtenidas del servicio en la variable movies
        this.movies = movies;
      },
      error => {
        console.error('Error al obtener películas:', error);
      }
    );
  }

  changeRoute(evt: MouseEvent, name: string) {
    evt.preventDefault();
    let navcfg = [{ outlets: { secondary: name } }];
    this.router.navigate(navcfg, {
      skipLocationChange: false,
    });
  }
}
