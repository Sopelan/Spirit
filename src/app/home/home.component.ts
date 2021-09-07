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
  }
  name :any;
  password : any;
  ngOnInit() {
    this.password = localStorage.getItem("password");
    this.name = localStorage.getItem("name");
  if(this.name == "marcos" && this.password =="1234")
    {

    }
    else{
      this.router.navigate(['./login'])
    }
  }
  cerrarSession()
  {
    //localStorage.removeItem("name");
    //localStorage.removeItem("password");
    localStorage.clear();
    this.router.navigate(['./login'])
    
  }
}
