import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
}

