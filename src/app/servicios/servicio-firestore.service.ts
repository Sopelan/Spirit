import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirestoreService {

  private coleccionMensajes:AngularFirestoreCollection;
  db = getFirestore();
  coleccionMensajesChat: AngularFirestoreCollection;
  constructor(private refereciasFirebase:AngularFirestore,private http:HttpClient) 
  {
    this.coleccionMensajes = refereciasFirebase.collection('login');
    this.coleccionMensajesChat = refereciasFirebase.collection('chat');
  }
  GuardarMensajesFireStone(nombre:string,dia:string)
  {
    let persona = {"gmail": nombre, "dia": dia};
    this.coleccionMensajes.add(persona);
    
  }
  traerTodosPaises()
  {
    return this.http.get("https://restcountries.com/v3/all");

  }
  
  
  

}
