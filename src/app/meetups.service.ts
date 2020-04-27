import { Injectable } from '@angular/core';
import {MEETUPS} from "./mock-meetups";

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  meetups: any;
  selection: any;

  constructor() {
    this.meetups = MEETUPS;
  }

getAll() {
  return this.meetups;
}

setSelection(selection) {
  this.selection = selection;
}

getSelection() {
  return this.selection;
}
}
