import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { DialogOverviewExampleDialogPage } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.page';
import { Subscription } from 'rxjs';
import { ReportsService } from "../reports.service";
import { Report } from "../report.model";

@Component({
  selector: 'app-carecell-reports',
  templateUrl: './carecell-reports.page.html',
  styleUrls: ['./carecell-reports.page.scss'],
})
export class CarecellReportsPage implements OnInit, OnDestroy {
  reports: Report[] = [];
  private reportsSub: Subscription;
  constructor(public dialog: MatDialog, public reportsService: ReportsService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogPage, {
      width: '250px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }


  // ngOnInit() {
  // }
  // todo = {}
  // todid = {}
  // logForm1() {
  //   console.log(this.todo)
  // }
  // logForm2() {
  //   console.log(this.todid)
  // }

  ngOnInit() {
    this.reports = this.reportsService.getReports();
    this.reportsSub = this.reportsService.getReportUpdateListener()
      .subscribe((reports: Report[]) => {
        this.reports = reports;
      });
  }
  
  ngOnDestroy() {
    this.reportsSub.unsubscribe();
  }

}
