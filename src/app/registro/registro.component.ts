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
  RegistroError : boolean;
  RegistroErrors = "";
  constructor(private router: Router ,private autentificacion: AngularFireAuth ,private servicio : ServicioFirestoreService)
  {
    this.RegistroError = false

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
      console.info("el error es: ",error.code);
        this.RegistroError = true;
        switch(error.code){
          case 'auth/email-already-in-use':
            this.RegistroErrors = "Ese correo ya es usado. Elija otro";
            break;
          case 'auth/weak-password':
            this.RegistroErrors = "Contraseña: Tiene que tener mas de 6 caracteres";
            break;
          case 'auth/invalid-email':
            this.RegistroErrors = "Correo incorrecto";
            break;
  
          case 'auth/too-many-requests':
            this.RegistroErrors = "Está realizando demasiadas peticiones, espere un momento";
            break;
  
          default:
            this.RegistroErrors = "Algo ha salido mal, espere un momento.";
            break;
        }
    });
    
    
  }
  resetRegistroError(){
    this.RegistroError = false;
  }

}
