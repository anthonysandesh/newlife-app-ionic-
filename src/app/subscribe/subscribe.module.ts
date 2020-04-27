import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubscribePage } from './subscribe.page';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: SubscribePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MatCardModule,MatButtonToggleModule,MatSlideToggleModule,MatListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubscribePage]
})
export class SubscribePageModule {}
