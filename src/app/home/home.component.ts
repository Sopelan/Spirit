import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) 
  { 
    this.password = localStorage.getItem("password");
    this.name = localStorage.getItem("name");
    this.isShown = true;
    this.isShowna = false;
    if(localStorage.getItem("logueado") == "true" &&localStorage.getItem("password") == localStorage.getItem("registroPassWord")&&localStorage.getItem("registroName")==localStorage.getItem("name"))
    {
      this.saludo = "hola " + this.name;
      this.isShown = false;
      this.isShowna = true;
    } 
    
  }
  isShown : boolean ;
  name :any;
  password : any;
  saludo:any
  isShowna:boolean;
  ngOnInit() {
    this.password = localStorage.getItem("password");
    this.name = localStorage.getItem("name");
    this.isShown = true;
    this.isShowna = false;
    if(localStorage.getItem("logueado") == "true" &&localStorage.getItem("password") == localStorage.getItem("registroPassWord")&&localStorage.getItem("registroName")==localStorage.getItem("name"))
    {
      this.saludo = "hola " + this.name;
      this.isShown = false;
      this.isShowna = true;
    } 
  }
  cerrarSession()
  {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("logueado");
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
  }
}
