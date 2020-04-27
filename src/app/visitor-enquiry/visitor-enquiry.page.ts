import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtpdialogPage } from '../otpdialog/otpdialog.page';
import { Validators, FormControl,FormBuilder, FormGroup, NgForm } from '@angular/forms';

export interface DialogData {
  otp: number;
  name: string;
}

@Component({
  selector: 'app-visitor-enquiry',
  templateUrl: './visitor-enquiry.page.html',
  styleUrls: ['./visitor-enquiry.page.scss'],
})
export class VisitorEnquiryPage implements OnInit {

  otp: number;
  name: string;
 
  otp1 = 1234;

  enquiryForm: FormGroup;
  fname : string = ' ';
  mobile : string = ' ';

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.enquiryForm = fb.group({
      'fname' : [null, Validators.required],
      'mobile' : [null, Validators.required]
    });
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(OtpdialogPage, {
      width: '250px',
      data: {name: this.name, otp: this.otp}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.otp = result;
    });
  }

  onFormSubmit (form:NgForm) {
    console.log(form);
  }

  ngOnInit() {
  }

}
