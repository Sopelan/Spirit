import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Preguntas } from './preguntas';
@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})

export class PreguntadosComponent implements OnInit {

  preguntas : Preguntas[] = [];
  respuestasCorrectas: number
  preguntaActual : any;
  contador : number
  opcion :string;
  seguirRespondiendo :boolean
  adivino:boolean;
  ver:boolean;
  Cualver:boolean;
  constructor() 
  {
    this.respuestasCorrectas = 0;
    this.contador = 0;
    this.opcion = "";
    this.seguirRespondiendo = false;
    this.adivino = false;
    this.ver = false;
    this.Cualver = true;
  }
  

  ngOnInit(): void {
    this.generadorDePreguntas();
    this.respuestasCorrectas = 0;
    this.getPreguntaAleatoria();

  }
  generadorDePreguntas()
  {
    let pregunta1 : Preguntas = new Preguntas("¿quien es el peor jugador de indepediente?","Velasco",["Chavez","Dominguez","Velasco","Caballero"],"Deporte");
    let pregunta2 : Preguntas = new Preguntas("El mejor anime de la temporada primavera 2021","Tokyo Revengers",["Vivy: Fluorite Eye’s Song","Tokyo Revengers","Fruits Basket: The Final","Zombieland Saga: Revenge"],"Entrenimiento");
    let pregunta3 : Preguntas = new Preguntas("Cual es la capital de Buenos Aires","La Plata",["Quilmes","Berazategui","La Plata","Ezpeleta"],"Geografía");
    let pregunta4 : Preguntas = new Preguntas("¿De qué nacionalidad era Adolf Hitler?","Nació en Austria",["Nació en Alemania","Nació en Polonia","Nació en Austria","Nació en Argentina"],"Historia");
    this.preguntas.push(pregunta1,pregunta2,pregunta3,pregunta4);

  }
  getPreguntaAleatoria()
  { 
    this.preguntaActual = this.preguntas[this.contador];
    if(this.contador == this.preguntas.length)
      this.Cualver = false
    this.contador ++;
    this.seguirRespondiendo = false;
    this.ver = false
    

  }
  checkearRespuesta(preguntaActual:Preguntas,opcion:string)
  {
    this.adivino = preguntaActual.siEsCorrecto(opcion);
    if(this.adivino)
      this.respuestasCorrectas++;
    this.seguirRespondiendo = true;
    this.ver = true;
  }
}
