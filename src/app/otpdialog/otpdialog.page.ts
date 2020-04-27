import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../visitor-enquiry/visitor-enquiry.page';

@Component({
  selector: 'app-otpdialog',
  templateUrl: './otpdialog.page.html',
  styleUrls: ['./otpdialog.page.scss'],
})
export class OtpdialogPage implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OtpdialogPage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

}
