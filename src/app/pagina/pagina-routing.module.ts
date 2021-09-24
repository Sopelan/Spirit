import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { ChatComponent } from '../chat/chat.component';
import { HomeComponent } from '../home/home.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../preguntados/preguntados.component';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { PaginaComponent } from './pagina.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: '',redirectTo: '/home',pathMatch: "full"},
  {path: 'QuienSoy',component:QuienSoyComponent},
  {path: 'MayorMenor', component:MayorMenorComponent},
  {path: 'Ahorcado',component:AhorcadoComponent},
  {path: 'chat',component:ChatComponent},
  {path: 'preguntados',component:PreguntadosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaRoutingModule { }
