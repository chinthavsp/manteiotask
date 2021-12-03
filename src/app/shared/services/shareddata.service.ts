import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
 
  constructor(private http: HttpClient) { }
  postApi(url:any,payload:any){
   return this.http.post(url,payload);

  }
  postApi2(url:any,payload:any){
    return this.http.post(url,payload)

  }
  postApiF(url:any,payload:any){
    return this.http.post(url,payload)
  }

  
}
