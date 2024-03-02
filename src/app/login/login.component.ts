import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { DjangoService } from '../services/djangoservice.service';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

class Login {
  constructor(
    public username: string,
    public password1: string
  ) {}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent implements OnInit{
  nombre: string = "";
  password: string = "";
  public myLogin: FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    private MovieService: MovieService,
    private DjangoService: DjangoService,
    private LoginService: LoginService
  ) { 
    this.myLogin = this.fb.group({
      username: new FormControl('', Validators.required), 
      password1: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {}

  loginUsuario() {
    const datosAcceso = this.myLogin.getRawValue();
    
      const datosLogin = {
      'usuario': datosAcceso['username'],
      'pass': datosAcceso['password1']
    }
    this.LoginService.loginUsuario(datosLogin).subscribe(
      response => {
        this.router.navigate(['home']);
      },
      error => {
        console.log("error");
      }
    )

    }
}

