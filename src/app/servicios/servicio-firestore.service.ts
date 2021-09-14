import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirestoreService {

  private coleccionMensajes:AngularFirestoreCollection<any>;
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajes = refereciasFirebase.collection<any>('login');
  }
  GuardarMensajesFireStone(nombre:string,dia:string)
  {
    let persona = {"gmail": nombre, "dia": dia};
    this.coleccionMensajes.add(persona);
  }

}
