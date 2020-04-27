import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatGridListModule, MatCardModule, MatIconModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule, MatTabsModule,
    MatFormFieldModule,
    MatCardModule, MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
