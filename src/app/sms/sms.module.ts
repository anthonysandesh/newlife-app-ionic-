import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SmsPage } from './sms.page';
import { MatTabsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
const routes: Routes = [
  {
    path: '',
    component: SmsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SmsPage]
})
export class SmsPageModule {}
