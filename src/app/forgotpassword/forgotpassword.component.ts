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

  constructor(private sharedservice:ShareddataService,private toastr:ToastrService ,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
  }
  Forgot=new FormGroup({
    Email:new FormControl('',Validators.required)
  })

  forgot(){
    let url="http://137.59.201.54:91/api/register/forgetpassword?Email="+this.Forgot.value.Email;
    this.sharedservice.postApiF(url,"").subscribe((res:any)=>{
      console.log(res);
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },1000)
      this.toastr.success(res.message,"message");
    },err=>{
      console.log(err);
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },1000)
      this.toastr.error(err.message);
    })
  }
}
