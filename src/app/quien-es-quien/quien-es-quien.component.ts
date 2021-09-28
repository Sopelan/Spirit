import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
interface Personaje
{
  nombre : string;
  apellido : string;
  genero : string;
  imagen : string;
  colorPelo: string;
  colorOjos:string;
  anime:string;

  
}
@Component({
  selector: 'app-quien-es-quien',
  templateUrl: './quien-es-quien.component.html',
  styleUrls: ['./quien-es-quien.component.css']
})

export class QuienEsQuienComponent implements OnInit {

  personajes : Personaje[] = []
  ver:string = ""
  esto : boolean;
  preguntasRestantes :any;
  personajeElejido : any;
  verComenzar:boolean;
  verElejido:boolean;
  alertas:string;
  constructor() 
  {
    this.esto = false;
    this.verComenzar =true;
    this.verElejido =false;
    this.alertas = "";
  }
  
  ngOnInit(): void 
  {
    let personaje1 : Personaje = {nombre: "Ichika",apellido:"Nakano",genero:"Femenino",imagen:"assets/personajes/IchikaNakano.jpg",colorOjos: "Azul",colorPelo:"Rosa" ,anime:"Go Toubun no Hanayome"}
    let personaje2 : Personaje = {nombre: "Ken",apellido:"Kaneki",genero:"Masculino",imagen:"assets/personajes/kanekiken.jpg",colorOjos: "Marron",colorPelo:"Blanco", anime:"Tokyo ghoul"}
    let personaje3 : Personaje = {nombre: "Kihigaya",apellido:"Hachiman",genero:"Masculino",imagen:"assets/personajes/KihigayaHachiman.jpg",colorOjos: "Negro",colorPelo:"Negro", anime:"Yahari ore no seishun love Come wa Machigatteiru"}
    let personaje4 : Personaje = {nombre: "Naoya",apellido:"Mukai",genero:"Masculino",imagen:"assets/personajes/NaoyaMukai.jpg",colorOjos: "Gris",colorPelo:"Marron", anime:"Kanojo mo Kanojo"}
    let personaje5 : Personaje = {nombre: "Touka",apellido:"Kirishima",genero:"Femenino",imagen:"assets/personajes/ToukaKirishima.jpg",colorOjos: "Morado",colorPelo:"Morado", anime:"Tokyo ghoul"}
    let personaje6 : Personaje = {nombre: "Yui",apellido:"Yuigahama",genero:"Femenino",imagen:"assets/personajes/YuiYuigahama.jpg",colorOjos: "Rojo",colorPelo:"Rosa", anime:"Yahari ore no seishun love Come wa Machigatteiru"}
    this.personajes.push(personaje1,personaje2,personaje3,personaje4,personaje5,personaje6);
    this.personajeElejido = this.personajes[Number.parseInt((Math.random()*(this.personajes.length-1)).toFixed(0))];
    console.log("Se elijió ",this.personajeElejido);
    console.log(this.personajes);
    this.preguntasRestantes = 10;
    this.ver= "preguntas restantes: "+this.preguntasRestantes;
  }
  ImagenClick(item:any)
  {
    if(this.personajeElejido == item)
      this.Ganaste();
    else
    {
      this.preguntasRestantes--;
      item.imagen = "";
      this.alertas ="<h3 class='text-danger'>Equivocado!!</h3>";
      this.SiPerdiste();
    }
    this.ver= "preguntas restantes: "+this.preguntasRestantes;
  }
  boton(opcion:string,boton:string)
  {
    let op = "";  
    if(boton == "Genero")
      {
        switch(opcion)
        {
          case "Masculino":
            if(this.personajeElejido.genero == opcion)
            {
              op = "Masculino";
              this.alertas = "<h3 class='text-dark'>Es Masculino</h3>"
            }
            else
            {
              op = "Femenino"
              this.alertas = "<h3 class='text-dark'>No es Masculino</h3>"
            }
            break;
          case "Femenino":
            if(this.personajeElejido.genero == opcion)
            {
              op = "Femenino";
              this.alertas = "<h3 class='text-dark'>Si es Femenino</h3>"
            }
            else
            {
              op = "Masculino"
              this.alertas = "<h3 class='text-dark'>No es Femenino</h3>"
            }
            break;
        }
        for(let i = 0;i<this.personajes.length;i++)
        {
          if(this.personajes[i].genero != op)
            this.personajes[i].imagen = "";
        }
      }
      else if(boton == "colorOjos")
      {
        if(this.personajeElejido.colorOjos == opcion)
        {
          op = opcion;
          this.alertas = "<h3 class='text-dark'>Es "+opcion+"</h3>"
        }
        else
        {
         op = ""
        this.alertas = "<h3 class='text-dark'>No es "+opcion+"</h3>"
        }
        if(opcion == op)
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].colorOjos != opcion)
              this.personajes[i].imagen = "";
          
          }
        }
        else
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].colorOjos == opcion)
              this.personajes[i].imagen = "";
          
          }
        }
       
      }
      
      if(boton == "colorPelo")
      {
        if(this.personajeElejido.colorPelo == opcion)
            {
              op = opcion;
              this.alertas = "<h3 class='text-dark'>Es "+opcion+"</h3>"
            }
            else
            {
              op = ""
              this.alertas = "<h3 class='text-dark'>No es "+opcion+"</h3>"
            }
       
        if(opcion == op)
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].colorPelo != opcion)
              this.personajes[i].imagen = "";
          
          }
        }
        else
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].colorPelo == opcion)
              this.personajes[i].imagen = "";
          
          }
        }
      }
      if(boton == "anime")
      {
        if(this.personajeElejido.anime == opcion)
            {
              op = opcion;
              this.alertas = "<h3 class='text-dark'>Es de "+opcion+"</h3>"
            }
            else
            {
              op = ""
              this.alertas = "<h3 class='text-dark'>No es de "+opcion+"</h3>"
            }
       
        if(opcion == op)
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].anime != opcion)
              this.personajes[i].imagen = "";
          
          }
        }
        else
        {
          for(let i = 0;i<this.personajes.length;i++)
          {
            if(this.personajes[i].anime == opcion)
              this.personajes[i].imagen = "";
          
          }
        }
      }
      this.preguntasRestantes--;
      this.SiPerdiste();
      this.ver= "preguntas restantes: "+this.preguntasRestantes;

  }
  Ganaste()
  {
    this.verElejido = true;
    this.esto = false;
    this.alertas = "<h1 class='text-dark'>Ganaste!!!</h1>"
  }
  Empezar()
  {
    this.esto = true;
    this.verComenzar = false;
  }
  SiPerdiste()
  {
    if(this.preguntasRestantes == 0)
    {
      this.alertas = "<h1 class='text-danger'>Perdiste!!!</h1>"
      this.esto = false;
      this.verElejido = true;
    }
    
  }

}
