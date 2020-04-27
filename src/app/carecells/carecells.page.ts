import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MeetupsService } from '../meetups.service';
@Component({
  selector: 'app-carecells',
  templateUrl: './carecells.page.html',
  styleUrls: ['./carecells.page.scss'],
})
export class CarecellsPage implements OnInit {

  meetups: any;

  constructor(private router: Router, public meetupsService: MeetupsService) { 
    this.meetups = this.meetupsService.getAll();
  }

  ngOnInit() {
  }

  chooseMeetup(meetup) {
    this.meetupsService.setSelection(meetup);
    this.router.navigate(['carecell-details']);
  }
}
