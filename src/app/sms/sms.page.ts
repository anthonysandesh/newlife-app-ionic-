import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  ngOnInit() {
  }

  toast: Promise<void>;
  // smsHistoryCounter: number = 0;
  // smsHistory: Array<any> = [];
  // public smsId: number = Math.floor(Math.random() * Math.floor(9999));

  groups: any[] = [
    {nop: 10, name: 'Active',plan: 'gt'},
    {nop: 30, name: 'Expired',plan: 'gt'},
    {nop: 50, name: 'All',plan: 'gt'}
  ];

credit = 100;
charPerSMS = 5;
maxSMS = 10;
sms = '';

constructor(
  public formBuilder: FormBuilder,
  private router: Router,
  public alertController: AlertController,
  public toastController: ToastController,
) { }

public myFunc() {
this.sms = '';
}

// history1(selection, smsId) {
//   this.smsHistoryCounter = this.smsHistoryCounter + 1;
//   this.smsHistory.push({
//     id: this.smsHistoryCounter,
//     smsId: smsId,
//     // selection: selection,
//   });
//   // this.selection = null;
//   return Promise.resolve();
// }

// getHistory() {
//   return Promise.resolve(this.smsHistory);
// }

send(){
  setTimeout(() => {
    let toast = this.toastController.create({
      message: 'Message sent Successfully!',
      duration: 3000
    }).then((toastData)=>{
      toastData.present();
    });

    this.toast = this.toastController.dismiss();
    // this.smsService.history1(this.Id);
    this.router.navigate(['sms']);
  }, 3000)
}

}
