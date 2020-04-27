import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export interface Prefix {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.page.html',
  styleUrls: ['./membership-form.page.scss'],
})
export class MembershipFormPage implements OnInit {

  ngOnInit() {
  }

  panelOpenState = false;


  
  prefix: Prefix[] = [
   
    {value: '1', viewValue: 'Mrs.'},
    {value: '2', viewValue: 'Mr.'},
    {value: '3', viewValue: 'Dr.'},
    {value: '4', viewValue: 'Ps.'},
    {value: '5', viewValue: 'Sis.'},
    {value: '6', viewValue: 'Bro.'},
    {value: '7', viewValue: 'Rev.'},
  ];

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  gender: string[] = ['Male','Female'];

  maritalstatus : string[] = ['Single','Married','Widow','Widower','Seperated','Divorced'];

  family : string[] = ['1','2','3','4','5'];

email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}


name = new FormControl('', [Validators.required]);

getErrorMessage1() {
  return this.name.hasError('required') ? 'You must enter a value' :
          '';
}


message = new FormControl('', [Validators.required]);

getErrorMessage2() {
  return this.name.hasError('required') ? 'You must enter a value' :
          '';
}
selectedFile  : File = null;

constructor(private http:HttpClient){}

onFileSelected(event){
  this.selectedFile = <File>event.target.files[0];
}

onUpload(){
  const fd = new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name);
  this.http.post('',fd)
  .subscribe(res =>
    {
      console.log(res);
    });
}

onSubmit(form: NgForm){
  console.log("Form Submitted",form.value);
}

}
