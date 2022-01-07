import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail-contrat',
  templateUrl: './client-detail-contrat.component.html',
  styleUrls: ['./client-detail-contrat.component.css']
})
export class ClientDetailContratComponent implements OnInit {

  @Input()
  childContrat: any;
  static modals: any;
  constructor() {
   }
  
  ngOnInit() {
 
  }
  ngAfterViewInit() {   
    ClientDetailContratComponent.modals = document.querySelectorAll(".modal");
  }

 
}
