import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from '../videos.service';


@Component({
  selector: 'app-video-archives',
  templateUrl: './video-archives.page.html',
  styleUrls: ['./video-archives.page.scss'],
})
export class VideoArchivesPage implements OnInit {

  public searchTerm: string = "";
  public videos: any;

  constructor(private videoService: VideosService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RVeVtBxoImI");
   }
  ngOnInit() {
    this.setFilteredItems();
  }
  setFilteredItems() {
    this.videos = this.videoService.filterItems(this.searchTerm);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.videos.length == 1000) {
        event.target.disabled = true;
      }
    }, 1500);
  }

  safeSrc: SafeResourceUrl;

    


}
