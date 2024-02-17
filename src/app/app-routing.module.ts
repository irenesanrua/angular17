import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component'; 
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'top-peliculas', component: TopPeliculasComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'detallespelicula/:id', component: DetallesPeliculaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '/home' } // Redirigir a la página de inicio si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }

