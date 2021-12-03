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
  
  constructor(private sharedservice: ShareddataService,private toastr:ToastrService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  Registration=new FormGroup({
    UserName:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required)
  })
  reg() {
    const payload={
      
    "ClientId":1,
    "UserName":this.Registration.value.UserName,
    "Password":this.Registration.value.Password,
    "Email":this.Registration.value.Email
    }

    this.sharedservice.postApi('http://137.59.201.54:91/api/register/signup',payload).subscribe((res:any)=>{
      console.log(res);
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
      this.toastr.success(res.message);

    },err=>{
      console.log(err);
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
      this.toastr.error(err.message);
      alert (err.message);
    });
    console.log(this.Registration.value);
  }

}
