import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MembershipFormPage } from './membership-form.page';
import { MatInputModule, MatCardModule, MatIconModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes = [
  {
    path: '',
    component: MembershipFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
   MatInputModule,
   MatCheckboxModule,
   MatSelectModule,
   MatExpansionModule,
   MatDatepickerModule,
   MatNativeDateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MembershipFormPage]
})
export class MembershipFormPageModule {}
