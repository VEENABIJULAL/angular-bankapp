import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dAccno="";
  dpswd="";
  dAmount="";
  wAccno="";
  wpswd="";
  wAmount="";

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    alert("amount credited");
    var accno=this.dAccno;
    var pswd=this.dpswd;
    var amount=this.dAmount;
    const result=this.dataservice.deposit(accno,pswd,amount)
    if(result){
      alert("the given amount"+amount+"credited...and new balance is:"+result);
    }

  }
  withdraw(){
    alert("amount withdrawed");
    var accno=this.wAccno;
    var pswd=this.wpswd;
    var amount=this.wAmount;
    const result=this.dataservice.withdraw(accno,pswd,amount)
    if(result){
      alert("the given amount"+amount+"withdrawed...and new balance is:"+result);
    }

  }

}
