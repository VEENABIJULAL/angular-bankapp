import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner";
  accno="Account number please";
  pswd="";
  accountdetails = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}
  constructor() { }

  ngOnInit(): void {
  }
  
  accnochange(event:any){
    this.accno=event.target.value;
    console.log(this.accno);
  }
  passwordchange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
  }

    login(){
      var acno=this.accno;
      var pwd=this.pswd;
      var users=this.accountdetails;
      if(acno in users){
        if(pwd==users[acno]["password"]){
          alert("login success");
        }
        else{
          alert("Incorrect password")
        }
      }
      else{
        alert("Invalid account");
      }
    }  

}
