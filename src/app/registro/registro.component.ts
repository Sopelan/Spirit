import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ServicioFirestoreService } from '../servicios/servicio-firestore.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  name:string = "";
  password:string = "";
  
  constructor(private router: Router ,private autentificacion: AngularFireAuth ,private servicio : ServicioFirestoreService)
  {
   
  }

  ngOnInit() {
    if(localStorage.getItem("logueado")=="true")
    {
      this.router.navigate(['./home'])
    }
  }
  register()
  {
    /*localStorage.setItem("registroName",this.name);
    localStorage.setItem("registroPassWord",this.password);
    localStorage.setItem("name",this.name);
    localStorage.setItem("password",this.password);
    localStorage.setItem("logueado","true");
    */
    this.autentificacion.createUserWithEmailAndPassword(this.name,this.password).then(usuario=>{
      console.log("register");
      console.info("usuario",usuario);
      let date: Date = new Date();
      let dia = date.toString();
      this.servicio.GuardarMensajesFireStone(this.name,dia);
      localStorage.setItem("name",this.name);
      localStorage.setItem("password",this.password);
      localStorage.setItem("logueado","true");
      this.router.navigate(['./home']);
    }).catch(error=>{
      console.info("el error es: ",error);
    });
    
  }

}
