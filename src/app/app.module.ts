import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatSelectModule, MatNativeDateModule, MatIconModule, MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { VideoPlayerPage } from './video-player/video-player.page';
import { OtpdialogPage } from './otpdialog/otpdialog.page';
import { DialogOverviewExampleDialogPage } from './dialog-overview-example-dialog/dialog-overview-example-dialog.page';
import { YoutubePipe } from './youtube.pipe';
import { HttpClientModule } from '@angular/common/http';
//import { SafePipe } from './safepipe';


@NgModule({
  declarations: [AppComponent,VideoPlayerPage,DialogOverviewExampleDialogPage,OtpdialogPage],
  entryComponents: [VideoPlayerPage,DialogOverviewExampleDialogPage,OtpdialogPage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,CommonModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    IonicModule.forRoot(),HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
