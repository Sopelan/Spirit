import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { ErrorComponent } from './pagina/error/error.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: '',redirectTo: '/home',pathMatch: "full"},
  {path: 'registro',component:RegistroComponent},
  {path: 'QuienSoy',component:QuienSoyComponent},
  {path: 'MayorMenor', component:MayorMenorComponent},
  {path: 'Ahorcado',component:AhorcadoComponent},
  {path: '**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
