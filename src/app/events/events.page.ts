import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GymService } from "../gym.service";
import { UCEventsService } from '../ucevents.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public cards: any;
  public searchTerm : string = "";
  public events : any;

  constructor(public navCtrl: NavController,private router: Router, public gymService: GymService,private event: UCEventsService) { 
   this.cards = this.gymService.getAll();
  }


ngOnInit() {
  this.setFilterItems();
}

chooseCard(card) {
 this.gymService.setSelection(card);
 this.router.navigate(['details']);
}
setFilterItems(){
  this.events = this.event.filterItems(this.searchTerm);
}
}
