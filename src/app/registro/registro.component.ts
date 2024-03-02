import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { DjangoService } from '../services/djangoservice.service';
import { LoginService } from '../services/login.service';

// Define la clase Registro
class Registro {
  constructor(
    public username: string,
    public email: string,
    public password1: string,
    public password2: string,
    public rol: number = 2, // Valor por defecto de rol
    public nombre: string,
    public fecha_nacimiento: Date,
    public direccion: string,
    public telefono: string
  ) {}
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'] 
})
export class RegistroComponent implements OnInit {
  public myForm: FormGroup;
  public registros: Array<Registro> = [];

  constructor(public fb: FormBuilder, 
              private router: Router, 
              private MovieService: MovieService, 
              private DjangoService: DjangoService,
              private LoginService: LoginService) {

    const email_regex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
    this.myForm = this.fb.group({
      username: new FormControl('', Validators.required), 
      email: new FormControl('', [Validators.required, Validators.pattern(email_regex)]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      direccion: new FormControl('', [Validators.required, Validators.minLength(12)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password1');
    const password2Control = formGroup.get('password2');
  
    if (passwordControl && password2Control) {
      return passwordControl.value === password2Control.value ? null : { mismatch: true };
    }
  
    return { mismatch: true };
  }
  
  saveData() {
    if (this.myForm.valid) {
      let registro=this.myForm.getRawValue();
      registro.rol=2;
      
    this.DjangoService.registrarUsuario(registro)
    .subscribe(
      response => {
        console.log("datos enviados");
        const datosLogin = {
          'usuario':registro['username'],
          'pass':registro['password1']
        }
        this.LoginService.loginUsuario(datosLogin).subscribe(
            response => {
              this.router.navigate(['home']);
            },
            error => {
              console.log(error);
            }
        )
      },
      error => {
        console.log("error");
      }
    );
      
      this.myForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }

  saveDataLocal() {
    if (this.myForm.valid) {
      console.log(this.myForm.value.email);
      const registro = new Registro(
        this.myForm.value.username,
        this.myForm.value.email,
        this.myForm.value.password,
        this.myForm.value.password2,
        this.myForm.value.rol,
        this.myForm.value.nombre,
        this.myForm.value.fecha_nacimiento,
        this.myForm.value.direccion,
        this.myForm.value.telefono
      );
      this.registros.push(registro);
      this.myForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}
