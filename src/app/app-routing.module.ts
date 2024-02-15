import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component'; 
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'peliculas/:id', component: PeliculasComponent },
  { path: 'top-peliculas', component: TopPeliculasComponent },
  { path: 'top-peliculas/:id', component: TopPeliculasComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'buscador/:id', component: BuscadorComponent },
  { path: '**', redirectTo: '/home' } // Redirigir a la página de inicio si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

