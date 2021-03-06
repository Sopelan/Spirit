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
  loginError:boolean;
  loginErrors :string;
  constructor(private router: Router,private servicio:ServicioFirestoreService)
  {
    this.loginError =false;
    this.loginErrors = "";
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
      console.info("el error es: ",error.code);
        this.loginError = true;
        switch(error.code){
          case 'auth/wrong-password':
          case 'auth/user-not-found':
          case 'auth/invalid-email':
            this.loginErrors = "Correo y/o contrase??a incorrecta.";
            break;
  
          case 'auth/too-many-requests':
            this.loginErrors = "Est?? realizando demasiadas peticiones, espere un momento";
            break;
          
          case 'auth/quota-exceeded':
            localStorage.setItem("name",this.name);
            localStorage.setItem("password",this.password);
            localStorage.setItem("logueado","true");
            this.router.navigate(['./home']);
            break;
          default:
            this.loginErrors = "Algo ha salido mal, espere un momento.";
            break;
        }
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
      alert("Email o Contrase??a incorrecta");*/

  }
  AccesoRapido()
  {
    this.name = "marcossopelana@gmail.com"
    this.password = 123456;
    
  }
  resetLoginError(){
    this.loginError = false;
  }
} 