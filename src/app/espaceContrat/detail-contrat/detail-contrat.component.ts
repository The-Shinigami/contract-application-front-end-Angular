import { Component, OnInit, Output, EventEmitter,Input  } from '@angular/core';

@Component({
  selector: 'app-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  styleUrls: ['./detail-contrat.component.css']
})
export class DetailContratComponent implements OnInit {
  message: any;
  showModal2=true;
  // @Output()
  // postMessageEvent = new EventEmitter();
  @Input()
  childContrat: any;
  constructor() { }
  showModal() {
    this.showModal2 = false;
}
  ngOnInit() {
    //eg message - would basically come from user input though
    // this.message = {
    //   value: "This is a message I like to post",
    //   id: 1
    // };
  }

  handleClick() {
 //   this.postMessageEvent.emit(this.message);
    console.log(this.childContrat);
  }

}
