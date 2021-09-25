import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  fotos:any[] = [
    ["kiwi",3,"assets\\3kiwi.jpg"],
    ["papafritas",3,"assets\\3papasfritas.jpg"],
    ["taza",3,"assets\\3taza.jpg"],
    ["tortugas",3,"assets\\3tortugas.jpg"],
    ["carros",4,"assets\\4carros.jpg"],
    ["galletas",4,"assets\\4galletas.jpg"],
    ["loros",4,"assets\\4loros.jpg"],
    ["pastel",4,"assets\\4pastel.jpg"],
    ["abejas",5,"assets\\5abejas.jpg"],
    ["chupones",5,"assets\\5chupones.jpg"],
    ["hamburguesa",5,"assets\\5hamburguesa.jpg"],
    ["lampara",5,"assets\\5lampara.jpg"],
    ["patos",5,"assets\\5patos.jpg"],
    ["pizza",5,"assets\\5pizza.jpg"],
    ["porcion",5,"assets\\5porcion.jpg"],
    ["helados",6,"assets\\6helados.jpg"],
    ["lampara",6,"assets\\6lampara.jpg"],
    ["orugas",6,"assets\\6orugas.jpg"],
    ["panchos",6,"assets\\6panchos.jpg"],
    ["rosquillas",6,"assets\\6rosquillas.jpg"],
    ["limon",7,"assets\\7limon.jpg"],
    ["gallinas",8,"assets\\8gallinas.jpg"],
    ["jarron",8,"assets\\8jarron.jpg"],
    ["pan",9,"assets\\9pan.jpg"]
  ]
  canImg1 : number = 0;
  canImg2 : number = 0;
  urlImg1 : string = "";
  urlImg2 : string = "";
  img1 = "";
  img2 = "";
  puntos = 0;
  vidas = 0;
  verBotones : boolean = false;
  verSiguiente : boolean = false;
  verStart : boolean = true;
  ver : boolean = false;
  perdiste : string = "";
  cuantos : string = "";
  errores : string = "";
  constructor() { }

  ngOnInit(): void {
  }
  creacionImagen()
  {
    do{
      var num = parseInt((Math.random() * (this.fotos.length -1)).toFixed(0));;
      this.urlImg1 = this.fotos[num][2];
      this.canImg1 = this.fotos[num][2];
      this.img1 = '<img src="'+this.urlImg1+'" height="360">'
      var num2 = parseInt((Math.random() * (this.fotos.length -1)).toFixed(0));
      this.urlImg2 = this.fotos[num2][2];
      this.canImg2 = this.fotos[num2][2];
    }
    while(num == num2);
  }
  siguiente()
  {
    if(localStorage.getItem("logueado") == "true")
    {
      this.creacionImagen();
      this.img2 = "";
      this.verSiguiente = false
      this.verBotones = true;
      this.perdiste="";
    }
    else
    {
      this.errores ="Tenés que iniciar sessión!!";
      this.perdiste="";
    }
  } 
  menorque()
  {
    if(localStorage.getItem("logueado") == "true")
    {
      this.img2 = '<img src="'+this.urlImg2+'" height="360" >';
      this.verSiguiente = true;
      this.verBotones = false;
      if(this.canImg1 < this.canImg2)
      {
        this.perdiste="correcto";
        this.puntos++
      }
      else
      {
        this.perdiste="incorrecto";
        this.vidas--;
      }
      if(this.vidas == 0)
      {
        this.perdiste="Perdiste";
        this.cuantos = "Hiciste " + this.puntos + " puntos";
        this.verSiguiente = false
      this.verBotones = false;
      this.creacionImagen();
      this.ver = false;
      this.verStart = true;
      }
    }
    else
    {
      this.perdiste = "";
      this.errores="Tenés que iniciar sessión!!";
    }
  }
  igualque()
  {
    if(localStorage.getItem("logueado") == "true")
    {
      this.verSiguiente = true;
      this.verBotones = false;
      this.img2 = '<img src="'+this.urlImg2+'" height="360" >';
      if(this.canImg1 == this.canImg2)
      {
        this.perdiste="correcto";
        this.puntos++
      }
      else
      {
        this.perdiste="incorrecto";
        this.vidas--;
      }
      if(this.vidas == 0)
      {
        this.perdiste="Perdiste";
        this.cuantos = "Hiciste " + this.puntos + " puntos";
        this.verSiguiente = false
      this.verBotones = false;
      this.creacionImagen();
      this.ver = false;
      this.verStart = true;
      }
    }
    else
    {
      this.errores ="Tenés que iniciar sessión!!";
      this.perdiste="";    
    }
  }
    mayorque()
    {
      if(localStorage.getItem("logueado") == "true")
      {
        this.verSiguiente = true;
        this.verBotones = false;
        this.img2 = '<img src="'+this.urlImg2+'" height="360" >'
        if(this.canImg1 > this.canImg2)
        {
          this.perdiste="correcto";
          this.puntos++
        }
        else
        {
          this.perdiste="incorrecto";
          this.vidas--;
        }
        if(this.vidas == 0)
        {
          this.perdiste="Perdiste";
          this.cuantos = "Hiciste " + this.puntos + " puntos";
          this.verSiguiente = false
        this.verBotones = false;
        this.creacionImagen();
        this.ver = false;
        this.verStart = true;
        }
      }
      else
      {
        this.errores ="Tenés que iniciar sessión!!";
        this.perdiste="";
      }

  }
  comenzar()
  {
    if(localStorage.getItem("logueado") == "true")
    {
      this.verSiguiente = false
      this.verBotones = true;
      this.img2 = "";
      this.creacionImagen();
      this.ver = true;
      this.verStart = false;
      this.puntos = 0;
      this.vidas = 10;
      this.perdiste="";
      this.cuantos = "";
    }
    else
    {
      this.errores ="Tenés que iniciar sessión!!";
      this.perdiste="";
    }
  }
  
}
