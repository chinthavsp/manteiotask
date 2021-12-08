import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ShareddataService } from '../shared/services/shareddata.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  submitted= false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private sharedservice:ShareddataService,private toastr:ToastrService ,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
  }
  Forgot=new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)])
  })
  get f() { return this.Forgot.controls  ; }

  forgot(){
    this.submitted = true;
    this.spinner.show();

    let url="http://137.59.201.54:91/api/register/forgetpassword?Email="+this.Forgot.value.Email;
    if(this.Forgot.valid){
    this.sharedservice.postApiF(url,"").subscribe((res:any)=>{
      console.log(res);
      this.spinner.hide();

      this.toastr.success(res.message,"message");
    },err=>{
      console.log(err);
      this.spinner.hide();

      this.toastr.error(err.message);
    })
  }
  else{
    this.spinner.hide();

    this.Forgot.markAsTouched();
  }
  }
}
