import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component'; 
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'top-peliculas', component: TopPeliculasComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'detallespelicula/:id', component: DetallesPeliculaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' } // Redirigir a la página de inicio si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }

