import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarecellDetailsPage } from './carecell-details.page';

const routes: Routes = [
  {
    path: '',
    component: CarecellDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarecellDetailsPage]
})
export class CarecellDetailsPageModule {}
