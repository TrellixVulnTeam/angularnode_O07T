import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { NovodispositivoComponent } from './novodispositivo/novodispositivo.component';
import { NovacategoriaComponent } from './novacategoria/novacategoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService} from './categoria.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    CategoriaComponent,
    HomeComponent,
    NovodispositivoComponent,
    NovacategoriaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CategoriaService
  ],
  bootstrap: [AppComponent, HttpClientModule]
})
export class AppModule { }
