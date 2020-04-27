import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import { NgForm } from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { DialogData } from '../carecell-reports/carecell-reports.page';
import { ReportsService } from "../reports.service";

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.page.html',
  styleUrls: ['./dialog-overview-example-dialog.page.scss'],
})
export class DialogOverviewExampleDialogPage implements OnInit {
  enteredNumber = "";
  enteredDate = "";
  constructor(public reportsService: ReportsService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogPage>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddReport(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.reportsService.addReport(form.value.number, form.value.date);
    form.resetForm();
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
