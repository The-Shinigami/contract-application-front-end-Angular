import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.css']
})
export class ListContratsComponent implements OnInit {
  contrats: any;
  constructor() { }

  ngOnInit(): void {
    this.contrats = [
      {
        date: "2020.1.1",
        numeroContrat: "21587643",
        idProduit:"505507"
      },
      {
        date: "2020.2.1",
        numeroContrat: "21587643",
        idProduit:"505507"
      },
      {
        date: "2020.3.1",
        numeroContrat: "21587643",
        idProduit:"505507"
      }
    ]
  }
  //child to parent
  // postMessage(messageFromChild: any) {
  //    this.Counter++;
  // }

}
