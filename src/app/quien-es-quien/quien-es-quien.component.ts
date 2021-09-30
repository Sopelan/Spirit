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
  animesArray : any = [
    "Go Toubun no Hanayome",
     "Tokyo Ghoul",
     "Oreigaru",
    "Kanojo mo Kanojo",
    "Higurashi no Naku Koro ni",
     "Tokyo Revengers",
    "DoctorStone",
      "Shuffle",
    "Elfen Lied",
    "Kanojo Okarishimasu"
]
  generosArray : any ={
    Femenino:"Femenino",
    Masculino:"Masculino"
  };
  coloresArray : any = [
    "Azul",
    "Marron",
    "Negro",
    "Morado",
    "Rosa",
    "Blanco",
    "Gris",
    "Rojo",
    "Naranja"
  ];
  constructor() 
  {
    this.esto = false;
    this.verComenzar =true;
    this.verElejido =false;
    this.alertas = "";
  }
  
  ngOnInit(): void 
  {
    let personaje1 : Personaje = {nombre: "Ichika",apellido:"Nakano",genero:this.generosArray.Femenino,imagen:"assets/personajes/IchikaNakano.jpg",colorOjos: this.coloresArray[0],colorPelo:this.coloresArray[4] ,anime:this.animesArray[0]}
    let personaje2 : Personaje = {nombre: "Ken",apellido:"Kaneki",genero:this.generosArray.Masculino,imagen:"assets/personajes/kanekiken.jpg",colorOjos: this.coloresArray[1],colorPelo:this.coloresArray[5], anime:this.animesArray[1]}
    let personaje3 : Personaje = {nombre: "Kihigaya",apellido:"Hachiman",genero:this.generosArray.Masculino,imagen:"assets/personajes/KihigayaHachiman.jpg",colorOjos: this.coloresArray[2],colorPelo:this.coloresArray[2], anime:this.animesArray[2]}
    let personaje4 : Personaje = {nombre: "Naoya",apellido:"Mukai",genero:this.generosArray.Masculino,imagen:"assets/personajes/NaoyaMukai.jpg",colorOjos: this.coloresArray[6],colorPelo:this.coloresArray[1], anime:this.animesArray[3]}
    let personaje5 : Personaje = {nombre: "Touka",apellido:"Kirishima",genero:this.generosArray.Femenino,imagen:"assets/personajes/ToukaKirishima.jpg",colorOjos: this.coloresArray[3],colorPelo:this.coloresArray[3], anime:this.animesArray[1]}
    let personaje6 : Personaje = {nombre: "Yui",apellido:"Yuigahama",genero:this.generosArray.Femenino,imagen:"assets/personajes/YuiYuigahama.jpg",colorOjos: this.coloresArray[7],colorPelo:this.coloresArray[4], anime:this.animesArray[2]}
    let personaje7 : Personaje = {nombre:"Rena",apellido:"Ryuugu",genero:this.generosArray.Femenino,imagen:"assets/personajes/RenaRyuuguuNuevo.jpg",colorOjos:this.coloresArray[0],colorPelo:this.coloresArray[8],anime:this.animesArray[4]};
    this.personajes.push(personaje1,personaje2,personaje3,personaje4,personaje5,personaje6,personaje7);
    console.log(this.personajes);
    this.personajes = this.personajes.sort()
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
