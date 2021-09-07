import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = "";
  password:string = "";
  
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
    
    if(this.name == "marcos" && this.password == "1234")
    {
      localStorage.setItem("name","marcos");
      localStorage.setItem("password","1234");
      localStorage.setItem("logueado","true");
      this.router.navigate(['./home'])
    }
    else
      alert("Contraseña incorrecta");
  }
} 