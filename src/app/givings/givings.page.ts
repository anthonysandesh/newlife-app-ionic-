import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { NavController } from '@ionic/angular';

export interface BankDetails {
  details: string;
  bank_data: string;
}
const Bank: BankDetails[] = [
  {bank_data: 'Bank Name', details: 'HDFC Bank'},
  {bank_data: 'Account Name', details: 'New Life Assembly of God Church'},
  {bank_data: 'Account Number', details: '15551450000079'},
  {bank_data: 'Account Type', details: 'Savings'},
  {bank_data: 'Branch Name', details: 'Kompally Branch'},
  {bank_data: 'IFSC Code', details: 'HDFC0004343'},
];

@Component({
  selector: 'app-givings',
  templateUrl: './givings.page.html',
  styleUrls: ['./givings.page.scss'],
})
export class GivingsPage implements OnInit {
  public givingsForm: FormGroup;
  fullname: string = ' ';
  email: string = ' ';
  category1: string = ' ';
  mobile: number;
  amount: number;
  Accounts: any[] = [];

  displayedColumns: string[] = ['bank_data', 'details'];
  dataSource = new MatTableDataSource<BankDetails>(Bank);

  constructor(private fb: FormBuilder, public navCtrl: NavController) {
    this.givingsForm = fb.group({
      fullname : [null, Validators.required],
      email : [null, Validators.required],
      category1 : [null, Validators.required],
      mobile : [null, Validators.required],
      amount : [null, Validators.required],
      // categories : this.fb.array([ this.initCategoryFields() ])
    });
   }

  Categories1: any[] = [
    {name: 'Chairs-1', description: 'Main hall chairs'},
    {name: 'Chairs-2', description: 'Mini hall chairs'},
    {name: 'Flood Relief-1', description: 'Kerala Flood Relief'},
    {name: 'Flood Relief-2', description: 'Visakhapatnam Flood Relief'},
  ];

  // onFormSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // initCategoryFields() : FormGroup {
  //   return this.fb.group({
  //     category1 : [null, Validators.required]
  //   })
  // }
  // addNewSelectField() : void {
  //   const control = <FormArray> this.givingsForm.controls.categories;
  //   control.push(this.initCategoryFields());
  // }
  // removeSelectField(i:number) : void {
  //   const control = <FormArray>this.givingsForm.controls.categories;
  //   control.removeAt(i);
  // }

  currentDate = new Date();

  onFormSubmit(val: any) : void {
    this.Accounts.push(val);
    console.dir(val);
    console.log(this.Accounts);
  }

  ngOnInit() {
  }
}