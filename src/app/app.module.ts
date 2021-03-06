import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ErrorComponent } from './pagina/error/error.component';
//import { RegistroComponent } from './registro/registro.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
//import { PaginaComponent } from './pagina/pagina.component';
import { ChatComponent } from './chat/chat.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { HttpClientModule } from '@angular/common/http';
import { QuienEsQuienComponent } from './quien-es-quien/quien-es-quien.component';
@NgModule({
  declarations: [
    AppComponent,
    //QuienEsQuienComponent,
    //LoginComponent,
    /*HomeComponent,
    QuienSoyComponent,
    ErrorComponent,
    //RegistroComponent,
    MayorMenorComponent,
    AhorcadoComponent,
    PaginaComponent,
    ChatComponent,
    PreguntadosComponent,*/
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
