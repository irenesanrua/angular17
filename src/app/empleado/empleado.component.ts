import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})

export class EmpleadoComponent {
  public title= "Bienvenid@";
  public empleado:Empleado;
  //public trabajador: Array<any>;
  //public trabajadorExterno: boolean;

  constructor(){
      this.empleado= new Empleado('Pedro', 47);
      }
      ngOnInit(){
          console.log(this.empleado);
      }
  
}
