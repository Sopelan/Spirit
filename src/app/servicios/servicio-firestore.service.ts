import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirestoreService {

  private coleccionMensajes:AngularFirestoreCollection<any>;
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajes = refereciasFirebase.collection<any>('mensajes');
  }
  GuardarMensajesFireStone(datos:any)
  {
    this.coleccionMensajes.add(datos);
  }

}
