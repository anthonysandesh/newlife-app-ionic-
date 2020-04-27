import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selection:any;
  public show:boolean = false;

  constructor(private router: Router, public gymService: GymService) {
    this.selection = this.gymService.getSelection() || this.gymService.getAll()[0];
   }
 
   email = new FormControl('', [Validators.required, Validators.email]);
   mobile = new FormControl('', [Validators.required]);
   name = new FormControl('', [Validators.required]);

   getErrorMessage() {
    return this.email.hasError('required') ? 'E-mail is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage1() {
    return this.mobile.hasError('required') ? 'Mobile Number is required' :
    '';
  }
  getErrorMessage2() {
    return this.name.hasError('required') ? 'Name is required' :
    '';
  }

  ngOnInit() {
  }

  public pay(){
    this.router.navigate(['payment']);
  }
}
