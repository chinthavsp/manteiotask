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

  constructor(private sharedservice: ShareddataService,private toastr:ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  
  }
  LoginForm=new FormGroup(
    {
    UserName:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required)
  }
  )

  signIn(){
    const payload={
      "Email":this.LoginForm.value.Email,
      "Password":this.LoginForm.value.Password
    }
    this.sharedservice.postApi2('http://137.59.201.54:91/api/register/login', payload).subscribe((res:any)=>{
      
     if(res.statusCode==1){
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
       this.toastr.success(res.message)
         }
     else{
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
      this.toastr.error(res.message)

      // alert (res.message);
     }
      console.log(res);

    },err=>{
      console.log(err);
    })
  }
}
