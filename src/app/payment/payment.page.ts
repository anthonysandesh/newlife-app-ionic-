import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  selection: any;
  public show: boolean = false;
  paymethods: string;
  public eventId: number = Math.floor(Math.random() * Math.floor(9999));
  toast: Promise<void>;

  constructor(private router: Router, public gymService: GymService, public loadingController: LoadingController, public toastController: ToastController) {
    this.selection = this.gymService.getSelection() || this.gymService.getAll()[0];
    this.paymethods = "creditcard";
   }

   monthControl = new FormControl('', [Validators.required]);
   selectFormControl = new FormControl('', Validators.required);
   months: any[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

   yearControl = new FormControl('', [Validators.required]);
   selectFormControl1 = new FormControl('', Validators.required);
   years: any[] = ['19', '20', '21', '22', '23', '24'];

   name = new FormControl('', [Validators.required]);
   cardno = new FormControl('', [Validators.required]);
   cvv = new FormControl('', [Validators.required]);

   getErrorMessage2() {
    return this.name.hasError('required') ? 'Name is required' :
    '';
  }
  getErrorMessage1() {
    return this.cardno.hasError('required') ? 'Card Number is required' :
    '';
  }
  getErrorMessage() {
    return this.cvv.hasError('required') ? 'CVV is required' :
    '';
  }

  pay() {
    this.loadingController.create({
      message: 'Please wait...',
      duration: 2500
    })
    .then((res) => {
      res.present();
    });

    setTimeout(() => {
      let toast = this.toastController.create({
        message: 'Payment Successful!',
        duration: 3000
      }).then((toastData)=>{
        toastData.present();
      });

      this.toast = this.toastController.dismiss();
      this.gymService.booking(this.selection, this.eventId);
      this.router.navigate(['events1']);
    }, 3000)
    
  }

  ngOnInit() {
  }

}
