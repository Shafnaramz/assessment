import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { TestComponent } from '../test/test.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
customerDetails ={
  1001: { fname: "geetha", lname: "geetha1", phno: 2986545670,  password: "userone" },
    1002: { fname: "teena", lname: "teena1", phno: 3456756790,  password: "usertwo"  },
     1003:{ fname: "tom", lname: "tomy", phno: 23456756745, password: "userthree"},
}
currentUser;

  constructor(private http:HttpClient) { 
  
  }
  saveDetails(){
    localStorage.setItem("accountDeatails",JSON.stringify(this.customerDetails));
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
  }
}
getDetails(){
  if(localStorage.getItem("customerDetails")){
  this.customerDetails =JSON.parse(localStorage.getItem("customerDetails"))
  }

if(localStorage.getItem("curentUser")){
  this.currentUser =JSON.parse(localStorage.getItem("currentUser"));
}
}
  
  test(fname,lname,phno,password){
     
  if(phno in this .customerDetails){
    alert("already exist")
    return false;
  }
  
    this.customerDetails[phno]={
    
      fname,
      lname,
      phno,
    
      password:password,
     
    }
    // this.saveDetails();
     return true;
   // return this.http.post(environment.apiUrl+"/register",data);
}
 
 }