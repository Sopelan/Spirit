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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuienEsQuienComponent } from '../quien-es-quien/quien-es-quien.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PaginaComponent,
    HomeComponent,
    QuienSoyComponent,
    //RegistroComponent,
    MayorMenorComponent,
    AhorcadoComponent,
    //PaginaComponent,
    ChatComponent,
    PreguntadosComponent,
    QuienEsQuienComponent,
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class PaginaModule { }
