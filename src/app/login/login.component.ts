import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner";
  acno="Account number please";
  pswd="";
  
  constructor(private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  
//  accnochange(event:any){
//    this.acno=event.target.value;
//    console.log(this.acno);
//  }
//  passwordchange(event:any){
//    this.pswd=event.target.value;
//    console.log(this.pswd);
//  }

    login(){
      var acno=this.acno;
      var pswd=this.pswd;
    const result=this.dataservice.login(acno,pswd)
    if(result){
      alert("Login successful");
      this.router.navigateByUrl("dashboard");
    }
    }  
    register(){
      alert("register clicked")
      this.router.navigateByUrl('register');
    }

}
