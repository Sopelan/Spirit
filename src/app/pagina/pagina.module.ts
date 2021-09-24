import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';
import { ErrorComponent } from './error/error.component';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { HomeComponent } from '../home/home.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from '../ahorcado/ahorcado.component';
import { ChatComponent } from '../chat/chat.component';
import { PreguntadosComponent } from '../preguntados/preguntados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginaComponent,
    HomeComponent,
    QuienSoyComponent,
    ErrorComponent,
    //RegistroComponent,
    MayorMenorComponent,
    AhorcadoComponent,
    //PaginaComponent,
    ChatComponent,
    PreguntadosComponent,
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    FormsModule
  ]
})
export class PaginaModule { }
