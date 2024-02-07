import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CochesComponent } from './coches/coches.component';
import { AlumnadoComponent } from './alumnado/alumnado.component';
import { PeliculasComponent } from './peliculas/peliculas.component'; // Asegúrate de importar correctamente tu componente "Pelicula"

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'alumnado', component: AlumnadoComponent },
  { path: 'peliculas', component: PeliculasComponent }, // Agregar ruta para el componente "Pelicula"
  { path: '**', redirectTo: '/home' } // Redirigir a la página de inicio si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

