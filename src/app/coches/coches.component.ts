import { Component } from '@angular/core';
import { Coche } from './coches';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.scss'
})
export class CochesComponent {
  public title= "El coche: ";
  public coche:Coche;
  //public trabajador: Array<any>;
  //public trabajadorExterno: boolean;

  constructor(){
      this.coche= new Coche('27', 'Chevrolet', 'Epica', '4264GJT');
      }
      ngOnInit(){
          console.log(this.coche);
      }
}
