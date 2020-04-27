import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DialogOverviewExampleDialogPage } from './dialog-overview-example-dialog.page';

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
    component: DialogOverviewExampleDialogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,MatSelectModule,
    MatInputModule, MatCardModule, MatIconModule,MatFormFieldModule,MatButtonModule,MatDatepickerModule,
    MatExpansionModule,MatDialogModule,MatIconModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DialogOverviewExampleDialogPage]
})
export class DialogOverviewExampleDialogPageModule {}
