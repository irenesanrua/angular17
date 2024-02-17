import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Define la interfaz Registro
interface Registro {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'] // Asegúrate de que sea 'styleUrls' en lugar de 'styleUrl'
})
export class RegistroComponent implements OnInit {
  public myForm: FormGroup;
  public registros: Array<Registro> = [];

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      direccion: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  saveData() {
    console.log(this.myForm.value.email);
    this.registros.push(this.myForm.value);
    this.myForm.reset();
  }
}
