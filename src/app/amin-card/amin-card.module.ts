import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AminCardPage } from './amin-card.page';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: AminCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AminCardPage]
})
export class AminCardPageModule {}
