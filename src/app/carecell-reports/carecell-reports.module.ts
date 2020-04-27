import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarecellReportsPage } from './carecell-reports.page';
import { MatInputModule, MatCardModule, MatIconModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';



const routes: Routes = [
  {
    path: '',
    component: CarecellReportsPage
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
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
   // MatFormFieldModule,
   MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarecellReportsPage]
})
export class CarecellReportsPageModule {}
