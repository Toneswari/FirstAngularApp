import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  username="radhakrishna jwelleries"
  password="eeshu"
  errorMessage='Invalid credentials'
  invalidLogin=false;
   constructor(private router:Router,public hardcodedAuthentication:HardcodedAuthenticationService){

   }

  
  ngOnInit(): void {
    
  }


  validate(){
    //console.log(this.username);
    // if(this.username==='radhakrishna jwelleries' && this.password==='eeshu')
    if(this.hardcodedAuthentication.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
  }
}
