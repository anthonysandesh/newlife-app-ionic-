import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberServicesPage } from './member-services.page';
import { MatInputModule, MatCardModule, MatIconModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';

const routes: Routes = [
  {
    path: '',
    component: MemberServicesPage
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
    MatDatepickerModule,MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
   // MatFormFieldModule,
   MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemberServicesPage]
})
export class MemberServicesPageModule {}
