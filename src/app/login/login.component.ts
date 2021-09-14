import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ServicioFirestoreService } from '../servicios/servicio-firestore.service';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:any = "";
  password:any = "";

  constructor(private router: Router,private servicio:ServicioFirestoreService,private autentificacion:AngularFireAuth)
  {
  }
  ngOnInit() {
    if(localStorage.getItem("logueado")=="true")
    {
      this.router.navigate(['/'])
    }
  }
  login()
  {
    var auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth,this.name,this.password).then(usuario=>{
      let date: Date = new Date();
      let dia = date.toString();
      this.servicio.GuardarMensajesFireStone(this.name,dia);
      console.log("login");
      console.info("usuario",usuario);
      localStorage.setItem("name",this.name);
      localStorage.setItem("password",this.password);
      localStorage.setItem("logueado","true");
      this.router.navigate(['./home']);
    }).catch(error=>{
      console.info("el error es: ",error);
    });
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    /*this.autentificacion.signInWithEmailAndPassword(this.name,this.password).then(usuario=>{
      console.log("login");
      console.info("usuario",usuario);
      this.router.navigate(['./home'])
    }).catch(error=>{
      console.info("el error es: ",error);
    });*/
    
    /*if(this.name == localStorage.getItem("registroName") && this.password == localStorage.getItem("registroPassWord"))
    {
      
    }
    else
      alert("Email o Contraseña incorrecta");*/

  }
  AccesoRapido()
  {
    this.name = "marcossopelana@gmail.com"
    this.password = 123456;
    
  }
} 