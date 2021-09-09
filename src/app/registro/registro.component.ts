import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  name:string = "";
  password:string = "";
  
  constructor(private router: Router ,private autentificacion: AngularFireAuth)
  {
   
  }

  ngOnInit() {
    
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
      this.router.navigate(['./home']);
    }).catch(error=>{
      console.info("el error es: ",error);
    });
    
  }

}
