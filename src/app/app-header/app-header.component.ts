import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  providers: [MovieService, HttpClient]
})
export class AppHeaderComponent /*implements OnInit*/ {
  movies: any[] = []; // Declaración de la propiedad movies y asignación de tipo any[]

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {}

  ngOnInit(): void {
    this.getMovies(); // Llama al servicio para obtener películas al inicializar el componente
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe({
      next: movie => {
        this.movies = movie;
        if(!this.movies){
          console.log("Error en el servidor");
        }
      },
      error: (e) => {
        var errorMessage = <any>Error;
        console.log(errorMessage);
      }});
    }
   
  }

 /* changeRoute(evt: MouseEvent, name: string) {
    evt.preventDefault();
    let navcfg = [{ outlets: { secondary: name } }];
    this.router.navigate(navcfg, {
      skipLocationChange: false,
    });
  }
}*/
