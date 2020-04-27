import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amin-card',
  templateUrl: './amin-card.page.html',
  styleUrls: ['./amin-card.page.scss'],
})
export class AminCardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = "PANKAJ";
  id = "100 121 0 4";
  from = "01/02";
  to = "01/05";

}
