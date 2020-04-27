import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.page.html',
  styleUrls: ['./live-stream.page.scss'],
})
export class LiveStreamPage implements OnInit {

  ngOnInit() {
  }

  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RVeVtBxoImI");
  }

}
