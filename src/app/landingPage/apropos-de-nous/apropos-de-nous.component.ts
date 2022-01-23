import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos-de-nous',
  templateUrl: './apropos-de-nous.component.html',
  styleUrls: ['./apropos-de-nous.component.css']
})
export class AProposDeNousComponent implements OnInit {
load: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 500);
  }

}
