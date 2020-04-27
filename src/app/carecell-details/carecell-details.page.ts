import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MeetupsService } from '../meetups.service'

@Component({
  selector: 'app-carecell-details',
  templateUrl: './carecell-details.page.html',
  styleUrls: ['./carecell-details.page.scss'],
})
export class CarecellDetailsPage implements OnInit {

  selection: any;
  public show:boolean = false;
  // public buttonName:any = 'Show';

  constructor(private router: Router, public meetupsService: MeetupsService) { 
    this.selection = this.meetupsService.getSelection() || this.meetupsService.getAll()[0];
  }

  

  ngOnInit() { 
   
   }

   home(){
     this.router.navigate(['carecells']);
   }

   getDirections(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
   }

}
