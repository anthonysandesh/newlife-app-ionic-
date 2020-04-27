import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UCEventsService {

  public events: any = [];

  constructor() {
    this.events = [{title:'Good Friday, Drama', location:'NLAG  Kompally', time:'7:00 PM', date:'19', month:'APR'},
    {title:'Easter Sunrise Service', location:'NLAG  Kompally', time:'5:00 AM', date:'21', month:'APR'},
    {title:'Womens Conference', location:'NLAG  Kompally', time:'1:00 PM', date:'12', month:'OCT'}]
   }

   filterItems(searchTerm){
     return this.events.filter(item =>{
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
     });
   }

}
