import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GivingsPage } from './givings.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIconModule, MatButtonModule, MatTableModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: GivingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GivingsPage]
})
export class GivingsPageModule {}
