import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { VideoPlayerPage } from '../video-player/video-player.page';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from '../videos.service';
import { UCEventsService } from '../ucevents.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  safeSrc: SafeResourceUrl;
  public searchTerm : string = "";
  public events : any;
  constructor(private router: Router, public dialog: MatDialog, private videoService: VideosService, private sanitizer: DomSanitizer, private event: UCEventsService) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RVeVtBxoImI");
  }
  
  playVideo(): void {
    const dialogRef = this.dialog.open(VideoPlayerPage, {
      width: '400px',
      height: '150px',
      panelClass: 'myapp-no-padding-dialog',
    });
  };

  slideOpts = {
    zoom: false
  };

  @ViewChild("mySlider") slides: IonSlides;

  slidesDidLoad() {
    this.slides.startAutoplay();
  }
  setFilterItems(){
    this.events = this.event.filterItems(this.searchTerm);
  }
  ngOnInit() {
    this.setFilterItems();
  }

  images:any[] = [
    {logo: "/assets/1.jpeg"},
    {logo: "/assets/2.jpeg"},
    {logo: "/assets/3.jpeg"},
    {logo: "/assets/4.jpeg"},
    {logo: "/assets/5.jpeg"},
    {logo: "/assets/6.jpeg"},
    {logo: "/assets/7.jpeg"},
  ]

}
