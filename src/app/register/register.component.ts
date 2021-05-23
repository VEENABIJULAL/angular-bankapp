import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
 register(){
   var uname=this.uname;
   var acno=this.acno;
   var pswd=this.pswd;
   const result=this.dataservice.register(uname,acno,pswd)
   if(result){
     alert("successfully registered");
     this.router.navigateByUrl("");
   }else{
     alert("user exists...please login");
   }
 }
}
