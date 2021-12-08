import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {NotificationService} from '../shared/services/notification.service'
import { ShareddataService } from '../shared/services/shareddata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   submitted= false;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private sharedservice: ShareddataService,private toastr:ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  
  }
  LoginForm=new FormGroup(
    {
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    Email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)])
  }
  )
  get f() { return this.LoginForm.controls ;}
  signIn(){
    this.submitted=true;
    const payload={
      "Email":this.LoginForm.value.Email,
      "Password":this.LoginForm.value.Password
    }
    this.spinner.show();
    if(this.LoginForm.valid){
    this.sharedservice.postApi2('http://137.59.201.54:91/api/register/login', payload).subscribe((res:any)=>{
      
     if(res.statusCode==1){
      this.spinner.hide();

       this.toastr.success(res.message)
         }
     else{
      this.spinner.hide();

      this.toastr.error(res.message)

      // alert (res.message);
     }
      console.log(res);

    },err=>{
      console.log(err);
    })
  }
  else{
    this.spinner.hide();
    this.LoginForm.markAsTouched();
  }
 
  }
}
