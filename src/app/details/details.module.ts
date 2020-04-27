import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';
import { MatInputModule, MatButtonModule, MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatIconModule, MatFormFieldModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
