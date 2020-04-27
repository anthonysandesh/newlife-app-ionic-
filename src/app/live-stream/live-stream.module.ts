import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiveStreamPage } from './live-stream.page';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: LiveStreamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiveStreamPage]
})
export class LiveStreamPageModule {}
