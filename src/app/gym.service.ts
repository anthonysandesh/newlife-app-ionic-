import { Injectable } from '@angular/core';
import { CARDS } from "./mock-events";

@Injectable({
  providedIn: 'root'
})
export class GymService {
  cards: any;
  selection: any;
  eventsBookingCounter: number = 0;
  eventBookings: Array<any> = [];

  constructor() {
    this.cards = CARDS;
  }

  getAll() { 
    return this.cards;
  }
  
  setSelection(selection) {
    this.selection = selection;
  }
  
  getSelection() {
    return this.selection;
  }

  booking(selection, eventId) {
    this.eventsBookingCounter = this.eventsBookingCounter + 1;
    this.eventBookings.push({
      id: this.eventsBookingCounter,
      eventId: eventId,
      selection: selection,
    });
    this.selection = null;
    return Promise.resolve();
  }
   
  getBookings() {
    return Promise.resolve(this.eventBookings);
  }

}
