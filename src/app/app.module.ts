import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from @ng-bootstrap/ng-bootstrap,
import { FormsModule } from '@angular/forms';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { TopPeliculasComponent } from './top-peliculas/top-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    PeliculasComponent,
    TopPeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
