import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentPage } from './payment.page';
import { MatInputModule, MatButtonModule, MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatIconModule, MatFormFieldModule, MatGridListModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    IonicModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
