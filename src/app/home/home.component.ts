import { Component, enableProdMode, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor()
  {

  }
  ngOnInit()
  {

  }
  /*constructor(private router: Router ,private autentificacion:AngularFireAuth) 
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
  



  ngOnInit() {
    //this.password = localStorage.getItem("password");
    //this.name = localStorage.getItem("name");
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
      //this.saludo = "hola " + this.name;
    
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
    this.router.navigate(['./']);
    
  }
  register()
  {
    this.router.navigate(["./registro"]);
  }
  login()
  {
    this.router.navigate(["./login"]);
  }*/
}
