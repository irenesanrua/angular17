import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'http://127.0.0.1:8000/api/v1';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  private djangoUrl = 'http://127.0.0.1:8000/api/v1/registrar/usuario';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any[]>(`${baseUrl}/registrar/usuario`);
  }
  registrar(datosRegistro: any): Observable<any> {
    return this.http.post<any>(this.djangoUrl, datosRegistro)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
