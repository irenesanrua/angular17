import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CochesComponent } from './coches/coches.component';
import { AlumnadoComponent } from './alumnado/alumnado.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'alumnado', component: AlumnadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
