import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  xyz=false;
  s2=false;
  s3=false;
  s4=false;
  s5=false;
  s6=false;
  s7=false;
  s8=false;
  avg=false;


  MarksForm:FormGroup;
    MarksForm2:FormGroup;
    MarksForm3:FormGroup;
    MarksForm4:FormGroup;
    MarksForm5:FormGroup;
    MarksForm6:FormGroup;
    MarksForm7:FormGroup;
    MarksForm8:FormGroup;


 
   totalObt: any =0;
  totalmrks:any =0;
  percentage:any =0;
  //2nd sem
   totalObt2:any =0;
  totalmrks2:any =0;
  percentage2:any =0;
  // 3rd semester 
   totalObt3:any =0;
  totalmrks3:any =0;
  percentage3:any =0;
  // 4th semester
   totalObt4:any =0;
  totalmrks4:any =0;
  percentage4:any =0;
  // 5th
  
   totalObt5:any =0;
  totalmrks5:any =0;
  percentage5:any =0;
  // 6th semester
  
   totalObt6:any =0;
  totalmrks6:any =0;
  percentage6:any =0;
  // 7th sem
  
   totalObt7:any =0;
  totalmrks7:any =0;
  percentage7:any =0;
  // 8th sem
  
   totalObt8:any =0;
  totalmrks8:any =0;
  percentage8:any =0;


  // avg percentge
      yourscore:any=0;
      total:any=0;
      percentageavg:any=0;
  constructor( private fb: FormBuilder) { 

  }
  ngOnInit(
  ) {
    this.MarksForm = this .fb.group({
      Rows :this.fb.array([
        this.intRow()   
      ])
    })
    this.MarksForm2 =this.fb.group({
      Rows2 :this.fb.array([
        this.intRow2()
      ])
    })
      this.MarksForm3 =this.fb.group({
      Rows3 :this.fb.array([
        this.intRow3()
      ])
    })
       this.MarksForm4 =this.fb.group({
      Rows4 :this.fb.array([
        this.intRow4()
      ])
    })
       this.MarksForm5 =this.fb.group({
      Rows5 :this.fb.array([
        this.intRow5()
      ])
    })
       this.MarksForm6 =this.fb.group({
      Rows6 :this.fb.array([
        this.intRow6()
      ])
    })
       this.MarksForm7 =this.fb.group({
      Rows7 :this.fb.array([
        this.intRow7()
      ])
    })
       this.MarksForm8 =this.fb.group({
      Rows8 :this.fb.array([
        this.intRow8()
      ])
    })
  }
  intRow(){
    return this.fb.group({
      Subject : [''],
      ObtainedMarks : [''],
      TotalMarks : ['']


    }
   
    )
  }
   intRow2(){
    return this.fb.group({
      Subject2 : [''],
      ObtainedMarks2 : [''],
      TotalMarks2 : ['']
    }
    )}
      intRow3(){
    return this.fb.group({
      Subject3 : [''],
      ObtainedMarks3 : [''],
      TotalMarks3 : ['']
    }
    )}
     intRow4(){
    return this.fb.group({
      Subject4 : [''],
      ObtainedMarks4 : [''],
      TotalMarks4 : ['']
    }
    )}
     intRow5(){
    return this.fb.group({
      Subject5 : [''],
      ObtainedMarks5 : [''],
      TotalMarks5 : ['']
    }
    )}
     intRow6(){
    return this.fb.group({
      Subject6: [''],
      ObtainedMarks6 : [''],
      TotalMarks6: ['']
    }
    )}
     intRow7(){
    return this.fb.group({
      Subject7 : [''],
      ObtainedMarks7 : [''],
      TotalMarks7 : ['']
    }
    )}
     intRow8(){
    return this.fb.group({
      Subject8 : [''],
      ObtainedMarks8 : [''],
      TotalMarks8 : ['']
    }
    )}
  
  
  
  
  
  

   get formArr(){
     return this.MarksForm.get("Rows") as FormArray;
   }
   get formArr2(){
     return this.MarksForm2.get("Rows2") as FormArray;
   }
     get formArr3(){
     return this.MarksForm3.get("Rows3") as FormArray;
   }
    get formArr4(){
     return this.MarksForm4.get("Rows4") as FormArray;
   }
    get formArr5(){
     return this.MarksForm5.get("Rows5") as FormArray;
   }
    get formArr6(){
     return this.MarksForm6.get("Rows6") as FormArray;
   }
    get formArr7(){
     return this.MarksForm7.get("Rows7") as FormArray;
   }
    get formArr8(){
     return this.MarksForm8.get("Rows8") as FormArray;
   }

   addSubject1() { 
     this.formArr.push(this.intRow())
    }
    addSubject2() { 
     this.formArr2.push(this.intRow2())
    }
    addSubject3() { 
     this.formArr3.push(this.intRow3())
    }
     addSubject4() { 
     this.formArr4.push(this.intRow4())
    }
     addSubject5() { 
     this.formArr5.push(this.intRow5())
    }
     addSubject6() { 
     this.formArr6.push(this.intRow6())
    }
     addSubject7(){
      this.formArr7.push(this.intRow7())
     }
      addSubject8() { 
     this.formArr8.push(this.intRow8())
    }

  deleteSubject(x:any){
    this.formArr.removeAt(x)
  } 
  deleteSubject2(x:any){
    this.formArr2.removeAt(x)
  }
  deleteSubject3(x:any){
    this.formArr3.removeAt(x)
  }
   deleteSubject4(x:any){
    this.formArr4.removeAt(x)
  }
  deleteSubject5(x:any){
    this.formArr5.removeAt(x)
  }
  deleteSubject6(x:any){
    this.formArr6.removeAt(x)
  }
  deleteSubject7(x:any){
    this.formArr7.removeAt(x)
  }
  deleteSubject8(x:any){
    this.formArr8.removeAt(x)
  }

    calculate(){
      this.xyz=true;
    //  this.MarksForm.value
     for(let i=0;i<=this.MarksForm.value.Rows.length; i++ ){
    this.totalObt = this.totalObt+(+this.MarksForm.value.Rows[i].ObtainedMarks );
    this.totalmrks=this.totalmrks +(+this.MarksForm.value.Rows[i].TotalMarks);
    this.percentage=(this.totalObt/this.totalmrks)*100 ;
     }
    
    }

      calculate2(){
      this.s2 =true;
     for(let j=0;j<=this.MarksForm2.value.Rows2.length; j++ ){
    this.totalObt2 = (this.totalObt2)+(+this.MarksForm2.value.Rows2[j].ObtainedMarks2 );
    this.totalmrks2=this.totalmrks2 +(+this.MarksForm2.value.Rows2[j].TotalMarks2);
    this.percentage2=(this.totalObt2/this.totalmrks2)*100 ;
     }

    }
     calculate3(){
       this.s3=true
     for(let j=0;j<=this.MarksForm3.value.Rows3.length; j++ ){
    this.totalObt3 = this.totalObt3+(+this.MarksForm3.value.Rows3[j].ObtainedMarks3 );
    this.totalmrks3=this.totalmrks3 +(+this.MarksForm3.value.Rows3[j].TotalMarks3);
    this.percentage3=(this.totalObt3/this.totalmrks3)*100 ;
     }
    
    }
     calculate4(){
       this.s4 =true
     for(let j=0;j<=this.MarksForm4.value.Rows4.length; j++ ){
    this.totalObt4 = this.totalObt4+(+this.MarksForm4.value.Rows4[j].ObtainedMarks4 );
    this.totalmrks4=this.totalmrks4 +(+this.MarksForm4.value.Rows4[j].TotalMarks4);
    this.percentage4=(this.totalObt4/this.totalmrks4)*100 ;
     }
    
    }

   calculate5(){
       this.s5 =true
     for(let j=0;j<=this.MarksForm5.value.Rows5.length; j++ ){
    this.totalObt5 = this.totalObt5+(+this.MarksForm5.value.Rows5[j].ObtainedMarks5 );
    this.totalmrks5=this.totalmrks5 +(+this.MarksForm5.value.Rows5[j].TotalMarks5);
    this.percentage5=(this.totalObt5/this.totalmrks5)*100 ;
     }
    
    }
       calculate6(){
       this.s6 =true
     for(let j=0;j<=this.MarksForm6.value.Rows6.length; j++ ){
    this.totalObt6 = this.totalObt6+(+this.MarksForm6.value.Rows6[j].ObtainedMarks6 );
    this.totalmrks6=this.totalmrks6 +(+this.MarksForm6.value.Rows6[j].TotalMarks6);
    this.percentage6=(this.totalObt6/this.totalmrks6)*100 ;
     }
    
    }
       calculate7(){
       this.s7 =true
     for(let j=0;j<=this.MarksForm7.value.Rows7.length; j++ ){
    this.totalObt7 = this.totalObt7+(+this.MarksForm7.value.Rows7[j].ObtainedMarks7 );
    this.totalmrks7=this.totalmrks7 +(+this.MarksForm7.value.Rows7[j].TotalMarks7);
    this.percentage7=(this.totalObt7/this.totalmrks7)*100 ;
     }
    
    }
       calculate8(){
       this.s8 =true
     for(let j=
     0;j<=this.MarksForm8.value.Rows8.length; j++ ){
    this.totalObt8 = this.totalObt8+(+this.MarksForm8.value.Rows8[j].ObtainedMarks8 );
    this.totalmrks8=this.totalmrks8 +(+this.MarksForm8.value.Rows8[j].TotalMarks8);
    this.percentage8=(this.totalObt8/this.totalmrks8)*100 ;
     }
    
    }
      finalResult(){
        this.avg =true;
       this.yourscore=this.totalObt + (+this.totalObt2) + (+this.totalObt3)+(+this.totalObt4)+(+this.totalObt5)+(+this.totalObt6)+(+this.totalObt7)+(+this.totalObt8);
       this.total=this.totalmrks + (+this.totalmrks2) + (+this.totalmrks3)+(+this.totalmrks4)+(+this.totalmrks5)+(+this.totalmrks6)+(+this.totalmrks7)+(+this.totalmrks8);
       this.percentageavg = (this.yourscore/this.total)*100 ;
      }

    
   
   
}
