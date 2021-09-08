import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:any = "";
  password:any = "";
  constructor(private router: Router)
  {
   
  }

  ngOnInit() {
    if(localStorage.getItem("logueado")=="true")
    {
      this.router.navigate(['./home'])
    }
  }
  login()
  {
    
    if(this.name == localStorage.getItem("registroName") && this.password == localStorage.getItem("registroPassWord"))
    {
      localStorage.setItem("name",this.name);
      localStorage.setItem("password",this.password);
      localStorage.setItem("logueado","true");
      this.router.navigate(['./home'])
    }
    else
      alert("Email o Contraseña incorrecta");
  }
  AccesoRapido()
  {
    if(localStorage.getItem("registroName") && localStorage.getItem("registroPassWord"))
    {
      this.name = localStorage.getItem("registroName");
      this.password = localStorage.getItem("registroPassWord");
    }

  }
} 