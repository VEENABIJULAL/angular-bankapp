import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountdetails:any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}

  constructor() { }
  register(uname:any,acno:any,pswd:any){
    let user=this.accountdetails;
   if(acno in user){
    return false;
   }else{
     user[acno]={
       acno,
       username:uname,
       password:pswd,
       balance:0
     }
     return true;
   } 

  }
  login(acno:any,pswd:any){
    let users=this.accountdetails;
    if(acno in users){
      if(pswd==users[acno]["password"]){
        return true;
        
      }
      else{
        return false;
        alert("Incorrect password")
      }
    }
    else{
      alert("Invalid account");
    }
  }
  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt);
    let users=this.accountdetails;
    if(acno in users){
      if(pswd==users[acno]["password"]){
        users[acno]["balance"]+=amount;
        return users[acno]["balance"];
      }else{
        alert("Incorrect password");
        return false;
      }
    }
      else{
        alert("invalid account")
      }
}
withdraw(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt);
  let users=this.accountdetails;
  if(acno in users){
    if(pswd==users[acno]["password"]){
      if(users[acno]["balance"]>amount){
        users[acno]["balance"]-=amount;
      return users[acno]["balance"];
      }
      else{
      alert("Insufficient balance");
      return false;
    }
  }
    else{
      alert("incorrect password")
      return false;
    }
  }
  else{
    alert("invalid account");
    return false;
  }
}
}
