import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token_endpoint = 'http://irenesanrua.pythonanywhere.com/oauth2/token/';
  //private token_endpoint = 'http://127.0.0.1:8000/oauth2/token/'; desde local

  constructor(private http: HttpClient) { }

  loginUsuario(datosLogin: any): Observable<any> {
    //creamos un map donde añadimos lo necesario para crear el token; como en oauth
    const obtenerToken = new HttpParams()
    .set('grant_type', 'password')
    .set('username', datosLogin['usuario'])
    .set('password', datosLogin['pass'])
    .set('client_id', 'admin')
    .set('client_secret', 'admin');

    const cabecera = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
//headers para datos relativos a la conexion como obtener el token, configuramos para la conexion TCP
    return this.http.post<any>(this.token_endpoint,obtenerToken.toString(),{headers:cabecera})
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
