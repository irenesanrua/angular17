import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from @ng-bootstrap/ng-bootstrap,
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { RegistroComponent } from './registro/registro.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    PeliculasComponent,
    TopPeliculasComponent,
    BuscadorComponent,
    DetallesPeliculaComponent,
    RegistroComponent,
    WatchlistComponent,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
