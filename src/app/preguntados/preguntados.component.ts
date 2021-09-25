import { Component, OnInit } from '@angular/core';
import { Preguntas } from './preguntas';
import { ServicioFirestoreService } from '../servicios/servicio-firestore.service';
import { BoundElementProperty, ThisReceiver } from '@angular/compiler';
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
  listaPaises : any;
  verfor : Boolean;
  html : string;
  verComenzar:boolean;
  errores:string;
  constructor(private serviciosFirestoreService : ServicioFirestoreService) 
  {
    this.respuestasCorrectas = 0;
    this.contador = -1;
    this.opcion = "";
    this.seguirRespondiendo = false;
    this.adivino = false;
    this.ver = false;
    this.Cualver = true;
    this.verfor = false
    this.html = "";
    this.verComenzar = true;
    this.errores = "";
  }
  

  ngOnInit(): void {
    this.TraerTodosPaises();


  }
  generadorDePreguntas()
  {
    this.preguntas = [];
    let pregunta1 : Preguntas = new Preguntas("¿quien es el peor jugador de indepediente?","Velasco",["Chavez","Dominguez","Velasco","Caballero"],"Deporte");
    let pregunta2 : Preguntas = new Preguntas("El mejor anime de la temporada primavera 2021","Tokyo Revengers",["Vivy: Fluorite Eye’s Song","Tokyo Revengers","Fruits Basket: The Final","Zombieland Saga: Revenge"],"Entrenimiento");
    let pregunta3 : Preguntas = new Preguntas("Cual es la capital de Buenos Aires","La Plata",["Quilmes","Berazategui","La Plata","Ezpeleta"],"Geografía");
    let pregunta4 : Preguntas = new Preguntas("¿De qué nacionalidad era Adolf Hitler?","Nació en Austria",["Nació en Alemania","Nació en Polonia","Nació en Austria","Nació en Argentina"],"Historia");
    this.preguntas.push(pregunta1,pregunta2,pregunta3,pregunta4);
    for(let i = 0;i<4;i++)
    {
      let num1 = parseInt((Math.random() * 250).toFixed(0))
      let num2 = parseInt((Math.random() * 250).toFixed(0))
      let num3 = parseInt((Math.random() * 250).toFixed(0))
      let num4 = parseInt((Math.random() * 250).toFixed(0))
      let pregunta : Preguntas = new Preguntas("de que bandera es este pais?",this.listaPaises[num1].name.common,[this.listaPaises[num2].name.common,this.listaPaises[num1].name.common,this.listaPaises[num3].name.common,this.listaPaises[num4].name.common],"Geografia")
      pregunta.imagen = this.listaPaises[num1].flags[0];
      pregunta.opciones.sort();
      //console.log(pregunta);
      this.preguntas.push(pregunta);
    }
    //para que funcione tiene que iniciar toda la aplicacion. Aca no puede estar
    //console.info("lista paises: ",this.listaPaises)
  }
  getPreguntaAleatoria()
  { 
    if(localStorage["logueado"] == "true")
    {
      this.contador ++;
      if(this.contador == this.preguntas.length)
      {
        this.verfor = false
        this.Cualver = false
        this.html = "";
      }
      else
      {
        this.preguntaActual = this.preguntas[this.contador];
       // console.log(this.contador);
        //console.log(this.preguntaActual);
        if(this.preguntaActual.imagen != "")
          this.html = '<img  src="'+this.preguntaActual.imagen+'" height="300">';
        this.seguirRespondiendo = false;
        this.ver = false
      }
    }
    else
    {
      this.errores = "Tenés que iniciar session!!";
    }

  }
  checkearRespuesta(preguntaActual:Preguntas,opcion:string)
  {
    if(localStorage["logueado"] == "true")
    {
      this.adivino = preguntaActual.siEsCorrecto(opcion);
      if(this.adivino)
        this.respuestasCorrectas++;
      this.seguirRespondiendo = true;
      this.ver = true;
      this.html = "";
    }
    else
    {
      this.errores = "Tenés que iniciar session!!";
    }
    
  }
  TraerTodosPaises()
  {
    this.serviciosFirestoreService.traerTodosPaises().subscribe(datosRetornados=>{
      console.info("datos retornables",datosRetornados);
      this.listaPaises = datosRetornados;
     });
  }
  Empezar()
  {
    if(localStorage["logueado"] == "true")
    {
      try
      {
        /*for(let i = 0;i<this.listaPaises.length;i++)
        {
          console.info("lista paises: ",this.listaPaises[i].name.common,this.listaPaises[i].flags[0]);
        }*/
        
        this.generadorDePreguntas();
        this.getPreguntaAleatoria();
        this.respuestasCorrectas = 0;
        this.opcion = "";
        this.seguirRespondiendo = false;
        this.adivino = false;
        this.ver = false;
        this.Cualver = true;
        this.verfor = true
        this.verComenzar = false
        this.errores = "";
      }
      catch(error)
      {
        this.errores = "Espere a que cargue";
        console.log(error);
        
      }
    }
    else
    {
      this.errores = "Tenés que iniciar session!!";
    }
  }
}
