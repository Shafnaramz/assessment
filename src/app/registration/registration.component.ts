import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationForm:FormGroup;
  dynamicFormArray:any
  constructor(private httpClient:HttpClient,
    private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({

    });
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data=>{
      this.dynamicFormArray=data;
     // console.log(this.dynamicFormArray);
     this.createFormControl();
    })
  }
  createFormControl(){
    this.dynamicFormArray.forEach(element => {
      if(element.Required==true){
        this.registrationForm.addControl(element.ID,new FormControl('',Validators.required));
      }
      else{
        this.registrationForm.addControl(element.ID,new FormControl(''));
      }
      
    });
    console.log(this.registrationForm)
  }

}
