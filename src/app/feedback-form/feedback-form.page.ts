import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.page.html',
  styleUrls: ['./feedback-form.page.scss'],
})
export class FeedbackFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  location : string  = "Kompally";
  address : string = "Sy. No. 637 and 638, Near Geetanjali Global School, Devaryamjal, Medchal Road, Hyderabad, PIN: 500078, Telangana, India";

}
