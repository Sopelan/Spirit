import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ServicioFirestoreService {

  private coleccionMensajes:AngularFirestoreCollection;
  db = getFirestore();
  coleccionMensajesChat: AngularFirestoreCollection;
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajes = refereciasFirebase.collection('login');
    this.coleccionMensajesChat = refereciasFirebase.collection('chat');
  }
  GuardarMensajesFireStone(nombre:string,dia:string)
  {
    let persona = {"gmail": nombre, "dia": dia};
    this.coleccionMensajes.add(persona);
    
  }
 
  
  
  

}
