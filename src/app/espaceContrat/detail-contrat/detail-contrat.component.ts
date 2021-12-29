import { Component, OnInit, Output, EventEmitter,Input ,
  ElementRef , ViewChild,AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  styleUrls: ['./detail-contrat.component.css']
})
export class DetailContratComponent implements OnInit {
 // message: any;
  // @Output()
  // postMessageEvent = new EventEmitter();
  @Input()
  childContrat: any;
  static modals: any;
  constructor() {
   }
  
  ngOnInit() {
 
  }
  ngAfterViewInit() {   
    DetailContratComponent.modals = document.querySelectorAll(".modal");
  }

 
}
