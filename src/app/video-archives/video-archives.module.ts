import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoArchivesPage } from './video-archives.page';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule, MatDividerModule} from '@angular/material';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { YoutubePipe } from '../youtube.pipe';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: VideoArchivesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,MatTabsModule,
    IonicModule,MatButtonModule,MatCardModule,MatInputModule,MatIconModule,Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoArchivesPage,YoutubePipe]
})
export class VideoArchivesPageModule {}
