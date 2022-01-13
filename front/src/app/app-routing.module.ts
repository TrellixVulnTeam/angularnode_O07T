import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { NovacategoriaComponent } from './novacategoria/novacategoria.component';
import { NovodispositivoComponent } from './novodispositivo/novodispositivo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categorias',component: CategoriaComponent,},
  {path:'novodispositivo',component: NovodispositivoComponent,},
  {path:'novacategoria',component: NovacategoriaComponent,}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
