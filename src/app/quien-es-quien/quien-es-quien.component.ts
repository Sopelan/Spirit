import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  colecciones : any;
  personajes : any[] = []
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
    "Higurashi no Naku Koro ni",
     "Tokyo Revengers",
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
    "Naranja",
    "verde",
    "violeta",
    "Rubio",
    "Magenta",
    "Castaño claro",
    "Rubio y Negro",
    "Amarrillo"
  ];
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.esto = false;
    this.verComenzar =false;
    this.verElejido =false;
    this.alertas = "";
    this.colecciones =  refereciasFirebase.collection("personajes")
  }
  
  ngOnInit(): void 
  {
    
    //let personaje : Personaje = {nombre:"",apellido:"",genero:this.generosArray.Femenino,imagen:"assets/personajes/.jpg",colorOjos:this.coloresArray[3],colorPelo:this.coloresArray[3],anime:this.animesArray[4]}
    //this.colecciones.add(personaje);
    this.alertas = "<h1 class='text-danger'>Cargando!!!</h1>";
    this.recuperarPersonajes();
    this.preguntasRestantes = 5;
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
  recuperarPersonajes()
  {
    this.refereciasFirebase.collection("personajes").snapshotChanges().subscribe((personajes)=>{
      this.personajes = [];
      personajes.forEach((personajes)=>
      {
        this.personajes.push(personajes.payload.doc.data())
      })
      this.personajes.sort((a:any, b:any)=>{
        if(a.apellido > b.apellido) return 1;
        if(a.apellido < b.apellido) return -1;
        return 0;
    })
      console.log(this.personajes);
      this.personajeElejido = this.personajes[Number.parseInt((Math.random()*(this.personajes.length-1)).toFixed(0))];
      this.verComenzar = true
      this.alertas = ""
      
    })
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
    console.log("Se elijió ",this.personajeElejido);
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
