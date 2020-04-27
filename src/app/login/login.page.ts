import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  show: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder) {   this.show = false; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      aminID: [''],
      password: [''],
    });

    this.loginForm = this.formBuilder.group({
      aminID: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }

  password() {
    this.show = !this.show;
}
register(){
  this.router.navigate(['membership-form']);
}

  

}
