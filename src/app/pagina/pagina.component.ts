import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private router: Router ,private autentificacion:AngularFireAuth) 
  { 
    //this.password = localStorage.getItem("password");
    this.isShown = true;
    this.isShowna = false;
    this.isShowni = true;
    try {
      this.auth = getAuth();
     this.user = this.auth.currentUser;
     if(this.user != null)
      {
        this.saludo = "hola " + this.user.email;
        this.isShown = false;
        this.isShowna = true;
      
      }
      else
      {
        if(localStorage.getItem("logueado") == "true")
        {
          this.name = localStorage.getItem("name");
          this.password = localStorage.getItem("password");
          this.saludo = "hola " + this.name;
          this.isShown = false;
          this.isShowna = true;
          this.autentificacion.signInWithEmailAndPassword(this.name,this.password);
        }
      }
    } catch (error) {
      this.name = localStorage.getItem("name");
      this.password = localStorage.getItem("password");
      this.saludo ="";
      if(localStorage.getItem("logueado") == "true")
        autentificacion.signInWithEmailAndPassword(this.name,this.password);
      console.log(error);
    }
  }
  auth;
  user;
  isShown : boolean ;
  name :any;
  password : any;
  saludo:any
  isShowna:boolean;
  isShowni:boolean;
  @Input() ruta:string = "";


  ngOnInit() {
    //this.password = localStorage.getItem("password");
    //this.name = localStorage.getItem("name");
    this.isShown = true;
    this.isShowna = false;
    this.isShowni = true;
  try {
    this.auth = getAuth();
    this.user = this.auth.currentUser;
   if(this.user != null)
    {
      this.saludo = "hola " + this.user.email;
      this.isShown = false;
      this.isShowna = true;
      //this.saludo = "hola " + this.name;
    
    }else
    {
      if(localStorage.getItem("logueado") == "true")
      {
        this.name = localStorage.getItem("name");
        this.password = localStorage.getItem("password");
        this.saludo = "hola " + this.name;
        this.isShown = false;
        this.isShowna = true;
        this.autentificacion.signInWithEmailAndPassword(this.name,this.password);
      }
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
    console.log(error);
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
    this.router.navigate([this.ruta]);
    
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
