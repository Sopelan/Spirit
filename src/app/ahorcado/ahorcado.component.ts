import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  cont:number;
  pista:string
  palabra:string = "";
  palabras = [["atlantico", "Un océano"], ["ordenador", "Una máquina"], ["cordoba", "provincia"], ["plaza", "Espacio público"], ["celular", "Gran invento"], ["mandarina", "Una fruta"], ["efootball", "Un juego"], ["Velasco", "jugador inutil de independiente"], ["everest", "Un monte"], ["relampago", "Antecede al trueno"], ["jirafa", "Un animal"], ["alemania", "Un país"], ["uruguay", "Un país"], ["ilustracion", "Representación gráfica"], ["excursion", "Actividad en la naturaleza"], ["pan", "De la panadería"], ["factura", "De la panaderia"], ["colegio", "Lugar para estudiar"], ["carrera", "Competición"], ["mantecol", "dulce"]];
  hueco:string[] =[];
  rand:number = 0;
  abcdario:string = "";
  acierto: string = "";
  letras: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  ver:boolean = false;
  msgfinal:string ="";
  reset:string = "Iniciar";
  verPisto:boolean = false;
  verIniciar:boolean = true;
  constructor() 
  { 
    this.cont=0;
    this.pista = "";
  }
  
  ngOnInit(): void {
    
    this.cont=0;
    this.pista = "";

  }
  inicio()
  {
    if(localStorage["logueado"] == "true")
    {
      this.generaPalabra();
      this.cont=6;
      this.pintarGuiones(this.palabra.length);
      this.ver = true;
      this.reset = "Elegir otra palabra";
      this.msgfinal ="";
      this.verPisto = true;
      this.verIniciar= false;
      this.acierto = "";
    }
    else
    {
      this.acierto = "tenés que iniciar sessión";
    }
  }
  verPista()
  {
    this.pista = "Pista: " + this.palabras[this.rand][1];
    if(localStorage["logueado"] != "true")
    {
      this.verPisto = false;
      this.verIniciar = true;
      this.cont = 0;
      this.ver = false;
      this.hueco =[];
      this.pista = "tenés que iniciar sessión";
      this.msgfinal ="";
      this.acierto = "";
    }
    
  }
  generaPalabra() 
  {
    this.rand =  Number.parseInt((Math.random() * 19).toFixed(0));
    this.palabra = this.palabras[this.rand][0].toLowerCase();
    //console.log(this.palabra);
  }
  intento(letra:string,$event: MouseEvent) {
    try
    {
      if(localStorage["logueado"] == "true")
      {
        ($event.target as HTMLButtonElement).disabled = true;
         if(this.palabra.indexOf(letra) != -1) {
        for(var i=0; i<this.palabra.length; i++) {
          if(this.palabra[i]==letra) 
            this.hueco[i] = letra;
        }
        this.acierto = "Bien!";
        //document.getElementById("acierto").className += "acierto verde";
      }else{
        this.cont--;
        //document.getElementById("intentos").innerHTML = cont;
        this.acierto = "Fallo!";
        //document.getElementById("acierto").className += "acierto rojo";
        //document.getElementById("image"+cont).className += "fade-in";
      }
      
      console.log(letra);
      this.compruebaFin();
      /*setTimeout(function () { 
        //document.getElementById("acierto").className = ""; 
      }, 800);*/
      }
      else
      {
        this.verPisto = false;
        this.verIniciar = true;
        this.cont = 0;
        this.ver = false;
        this.hueco =[];
        this.pista = "";
        this.msgfinal ="";
        this.acierto = "tenés que iniciar sessión";
      }
      
    }
    catch(error)
    {
      alert("no funciona");
      console.log(error);
      //console.log(letra);

      
    }
      //document.getElementById(letra).disabled = true;
    
  }
   compruebaFin() {
    if( this.hueco.indexOf("_ ") == -1 ) {
      this.msgfinal= "Felicidades !!";
      //document.getElementById("msg-final").className += "zoom-in";
      //document.getElementById("palabra").className += " encuadre";
      /*for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }*/
      this.verPisto = false;
      this.verIniciar= true;
      this.ver = false;
      this.reset = "Elegir otra palabra";
      this.acierto = "";

      //btnInicio.onclick = function() { location.reload() };
    }else if( this.cont == 0 ) {
      this.msgfinal = "Game Over";
      //document.getElementById("msg-final").className += "zoom-in";
      /*for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }*/
      this.ver = false;
      this.verPisto = false;
      this.verIniciar= true;
      this.reset = "Elegir otra palabra";
      this.acierto = "";

      //btnInicio.onclick = function () { location.reload() };
    }
  }
  pintarGuiones(num:number) {
    this.hueco = [];
    for (var i = 0; i < num; i++) {
      this.hueco.push("_ ")
    }
  }
}
