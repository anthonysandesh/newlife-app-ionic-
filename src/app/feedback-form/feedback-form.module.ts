import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbackFormPage } from './feedback-form.page';
import { MatInputModule, MatCardModule, MatIconModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: FeedbackFormPage
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
   // MatFormFieldModule,
   MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedbackFormPage]
})
export class FeedbackFormPageModule {}
