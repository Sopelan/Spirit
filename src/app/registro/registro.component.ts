import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  name:string = "";
  password:string = "";
  
  constructor(private router: Router)
  {
   
  }

  ngOnInit() {
    
  }
  register()
  {
    localStorage.setItem("registroName",this.name);
    localStorage.setItem("registroPassWord",this.password);
    localStorage.setItem("name",this.name);
    localStorage.setItem("password",this.password);
    localStorage.setItem("logueado","true");
    this.router.navigate(['./home']);
  }

}
