import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-detail-contrat',
  templateUrl: './admin-detail-contrat.component.html',
  styleUrls: ['./admin-detail-contrat.component.css']
})
export class AdminDetailContratComponent implements OnInit {
@Input()
  childContrat: any;
  static modals: any;
  constructor() {
   }
  
  ngOnInit() {
 
  }
  ngAfterViewInit() {   
     AdminDetailContratComponent.modals = document.querySelectorAll(".modal");
  }

}
