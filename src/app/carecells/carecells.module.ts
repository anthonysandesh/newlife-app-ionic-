import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {Component} from '@angular/core';

import { CarecellsPage } from './carecells.page';
import { MatBadgeModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: CarecellsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatBadgeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarecellsPage]
})
export class CarecellsPageModule {}
