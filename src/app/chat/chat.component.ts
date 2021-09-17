import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Mensajes } from './mensajes';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  db = getFirestore();
  coleccionMensajesChat: AngularFirestoreCollection;
  mensaje:string = ""
  mensajes:string = "";
  segundo=0;
  chats :Mensajes[] = [];
  @Output() multiplo10 = new EventEmitter();
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajesChat = refereciasFirebase.collection('chat');
  }
  ngOnInit(): void {
    this.segundo = 0;
    this.RecuperarMensajesChat();
    setInterval(() => {
      if(localStorage.getItem("logueado")== "true")
      {
        try{

          this.RecuperarMensajesChat();
          this.mensajes = "";
          this.segundo++;
          this.chats.sort(function(a, b){return Date.parse(a.dia) - Date.parse(b.dia)})
          for(let i = this.chats.length-10;i<this.chats.length;i++)
          {
            if(localStorage.getItem("name") == this.chats[i].nombre)
            {
                this.mensajes+='<div>'+
                '<div  align="right">'+
                '<p>ME</p>'+
                  '<div class="bg-light rounded py-2 px-3 mb-2" >'+
                    '<p class="text-small mb-0 text-muted">'+this.chats[i].mensaje+'</p>'+
                 ' </div>'+
                  '<p class="small text-muted">'+this.chats[i].dia+'<p/>'+
                '</div>'
             '</div>';
            }
            else
            {
              this.mensajes += '<div'+
              '<div >'+
                '<p>'+this.chats[i].nombre+'</p>'+
                '<div '+
                  '<div class="bg-primary rounded py-2 px-3 mb-2">'+
                    '<p class="text-small mb-0 text-white" >'+this.chats[i].mensaje+'</p>'+
                  '</div>'+
                  '<p class="small text-muted" >'+this.chats[i].dia+'<p/>'+
                '</div>'+
              '</div>';
            }
          }
        this.chats = [];
        }
        
        catch(error)
        {
          console.log(error);
          
        }
      }
      else
      {
        this.mensajes ="<h3>necesitas iniciar session<h3/>";
      } 
       
      
      
        
      
      
    }, 2000);
    
  }
  GuardarMensajesChat()
  {
    if(localStorage.getItem("logueado")== "true")
    {
      let chat = {"gmail": localStorage.getItem("name"), "dia": new Date().toString(),"mensaje":this.mensaje};
      this.coleccionMensajesChat.add(chat);
      this.mensaje = "";
    }
    else
    {
      this.mensajes ="<h3>necesitas iniciar session<h3/>";
    }
  }
  async RecuperarMensajesChat()
  {
    const querySnapshot = await getDocs(collection(this.db, "chat"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
       //console.log(doc.id, " => ",doc.data().dia, doc.data().gmail,doc.data().mensaje);
       let chat:Mensajes = new Mensajes(doc.data().dia,doc.data().gmail,doc.data().mensaje);
       this.chats.push(chat);
     });
     console.log("estoy leyendo");
  }


  
}