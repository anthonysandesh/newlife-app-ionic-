import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinService } from '../bulletin.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.page.html',
  styleUrls: ['./bulletin.page.scss'],
})
export class BulletinPage implements OnInit {
  public bulletins = [];

  

  constructor(private _bulletinService: BulletinService) {}
  // ngOnInit(): void {
  //   // Make the HTTP request:
  //   this.http.get('http://app.newlifeag.in/app/bulletinListApp').subscribe(data => {
  //     console.log(data);
  //   });
  // }

  ngOnInit(){
    this._bulletinService.getBulletin()
    .subscribe(data => this.bulletins = data);
  }

  viewFile = function(filename){
    console.log("The file is:",filename);
    window.open(filename,"_system");
  }
}
