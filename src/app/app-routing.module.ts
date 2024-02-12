import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component'; // Asegúrate de importar correctamente tu componente "Pelicula"
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent }, // Agregar ruta para el componente "Pelicula"
  { path: 'top-peliculas', component: TopPeliculasComponent },
  { path: '**', redirectTo: '/home' } // Redirigir a la página de inicio si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

