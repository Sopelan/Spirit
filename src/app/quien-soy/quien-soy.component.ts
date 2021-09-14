import { Component, enableProdMode, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";
@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private router: Router ,private autentificacion:AngularFireAuth) 
  { 
    //this.password = localStorage.getItem("password");
    this.isShown = true;
    this.isShowna = false;
    try {
      this.auth = getAuth();
     this.user = this.auth.currentUser;
     if(this.user != null)
      {
        this.saludo = "hola " + this.user.email;
        this.isShown = false;
        this.isShowna = true;
      
      }
    } catch (error) {
      this.isShown = true;
      this.isShowna = false;
      this.name = localStorage.getItem("name");
      this.password = localStorage.getItem("password");
      this.saludo ="";
      if(localStorage.getItem("logueado") == "true")
      {
        this.saludo = "hola " + this.name;
        this.isShown = false;
        this.isShowna = true;
        this.autentificacion.signInWithEmailAndPassword(this.name,this.password);
      }
    }
    
  }
  auth;
  user;
  isShown : boolean ;
  name :any;
  password : any;
  saludo:any
  isShowna:boolean;
  



  ngOnInit() {
    //this.password = localStorage.getItem("password");
    //this.name = localStorage.getItem("name");
  try {
    this.auth = getAuth();
   this.user = this.auth.currentUser;
   if(this.user != null)
    {
      this.saludo = "hola " + this.user.email;
      this.isShown = false;
      this.isShowna = true;
    
    }
  } catch (error) {
    this.isShown = true;
    this.isShowna = false;
    this.name = localStorage.getItem("name");
    this.password = localStorage.getItem("password");
    this.saludo ="";
    if(localStorage.getItem("logueado") == "true")
    {
      this.saludo = "hola " + this.name;
      this.isShown = false;
      this.isShowna = true;
      this.autentificacion.signInWithEmailAndPassword(this.name,this.password);
    }
  }
    
    
    
  }
  cerrarSession()
  {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("logueado");
    this.autentificacion.signOut();
    this.isShown = true;
    this.isShowna = false;
    this.saludo ="";
    this.router.navigate(['./QuienSoy']);
    
  }
  register()
  {
    this.router.navigate(["./registro"]);
  }
  login()
  {
    this.router.navigate(["./login"]);
  }
}
