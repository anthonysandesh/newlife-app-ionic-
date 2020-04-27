import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from '../gym.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  eventBookings: Array<any> = [];

  constructor(private router: Router, public gymService: GymService) {
    this.getEventBookings();
   }

  ngOnInit() {
  }

  getEventBookings() {
    this.gymService.getBookings()
      .then(data => { this.eventBookings = data; });
  }

}
