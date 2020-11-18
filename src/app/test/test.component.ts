import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  fname="";
  lname="";
  phno="";
  pwd="";

  testForm=this.fb.group({
   fname:['',[Validators.required]],
   lname:['',[Validators.required]],
    phno:['',[Validators.required,Validators.minLength(10)]],
    pwd:['',[Validators.required]]
  })

  constructor( private fb:FormBuilder,private router:Router,
    private dataService:DataService) { }

  ngOnInit(): void {
  }
  getError(filed){
    return (this.testForm.get(filed).touched||this.testForm.get(filed).dirty)&&this.testForm.get(filed).errors;
  }
  test(){
     if(this.testForm.valid){
    const result= this.dataService.test(this.testForm.value.fname,this.testForm.value.lname,this.testForm.value.phno,this.testForm.value.pwd)
      if(result){

  
    alert("Successfully created")
      }
     } else{
        alert("form is Invalid")
        return;
      }
    }
     // this.router.navigateByUrl("");
    }
  

  


  
    
    


  



