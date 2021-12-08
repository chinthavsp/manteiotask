import { Component, OnInit } from '@angular/core';
import { FormGroup
,FormControl,Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ShareddataService } from '../shared/services/shareddata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted= false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private sharedservice: ShareddataService,private toastr:ToastrService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  Registration=new FormGroup({
    UserName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Password:new FormControl('',[Validators.required ,Validators.minLength(6)]),
    Email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)])
  })

  get f() { return this.Registration.controls; }
  reg() {
    this.submitted = true;

    const payload={
      
    "ClientId":1,
    "UserName":this.Registration.value.UserName,
    "Password":this.Registration.value.Password,
    "Email":this.Registration.value.Email
    }
    this.spinner.show();

    if(this.Registration.valid){
    this.sharedservice.postApi('http://137.59.201.54:91/api/register/signup',payload).subscribe((res:any)=>{
      console.log(res);
      this.spinner.hide();

      this.toastr.success(res.message);

    },err=>{
      console.log(err);
      this.spinner.hide();

      this.toastr.error(err.message);
      alert (err.message);
    });
    console.log(this.Registration.value);
    
  }
  else {
    this.spinner.hide();

    this.Registration.markAsTouched();
   }
}


}
