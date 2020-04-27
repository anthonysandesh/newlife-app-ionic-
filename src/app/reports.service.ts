import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Report } from './report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }

  private reports: Report[] = [];
  private reportsUpdated = new Subject<Report[]>();

  getReports() {
    return [...this.reports];
  }

  getReportUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  addReport(number: any, date: any) {
    const report: Report = {number: number, date: date};
    this.reports.push(report);
    this.reportsUpdated.next([...this.reports]);
  }
}
